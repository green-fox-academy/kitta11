'use strict';
const express = require('express');
const app = express();
const PORT = 3000;
//if we use fetch
// const fetch = require('node-fetch');

const bodyParser = require('body-parser');
// const cors = require('cors')

const path = require('path');

app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
// in that case we dont have to put the jsonParser into the endpoint call
app.use(bodyParser.json());
// app.use(cors());

// const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json();

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ZORRAverde911',
  database: 'quiz',
});


connection.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/game', (req, res) => {
  const randomquestion = `SELECT * FROM questions ORDER BY RAND() LIMIT 1;`;
  connection.query(randomquestion, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    } else {
      let questionID = result[0].id;
      let question = result[0].question;
      console.log(questionID, question);
      const answerquery = `select answers.id, question_id, answer, is_correct from answers INNER JOIN questions ON answers.question_id=questions.id where question_id = ${questionID};`;
      connection.query(answerquery, (err, result) => {
        if (err) {
          console.log(err.toString());
          return;
        }
        console.log(result)
        res.json({
          questionId: questionID,
          question: question,
          answers: result
        })
      })
    }
  })
})

app.listen(PORT, () => {
  console.log(`el server esta corriendo en el port ${PORT}`)
});