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

const isCorrect = (input) => {
  if (input === false) {
    return 0
  } else {
    return 1
  }
}

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

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
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

app.get('/questions', (req, res) => {
  const questionlistquery = `SELECT questions.id, question FROM questions;`
  connection.query(questionlistquery, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.json(result)
  })
})

app.post('/question', (req, res) => {
  const source = req.body;
  const question = source.question;
  const answerOne = source.answerone;
  const isCorrectOne = isCorrect(source.radioone)
  const answerTwo = source.answertwo;
  const isCorrectTwo = isCorrect(source.radiotwo)
  const answerThree = source.answerthree;
  const isCorrectThree = isCorrect(source.radiothree)
  const answerFour = source.answerfour;
  const isCorrectFour = isCorrect(source.radiofour)

  const newquestionQ = `INSERT INTO questions (question) VALUES ('${question}');`;

  connection.query(newquestionQ, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    } else {
      let questionID = result.insertId;
      // INSERT INTO tbl_name (a,b,c) VALUES(1,2,3),(4,5,6),(7,8,9);

      const insertAnsQ = `INSERT INTO answers (question_id, answer, is_correct) VALUES 
      (${questionID}, '${answerOne}', ${isCorrectOne}), 
      (${questionID}, '${answerTwo}', ${isCorrectTwo}), 
      (${questionID}, '${answerThree}', ${isCorrectThree}),
      (${questionID}, '${answerOne}', ${isCorrectFour});`
      connection.query(insertAnsQ, (err, result) => {
        if (err) {
          console.log(err.toString());
          return;
        }
        console.log(result)
        res.redirect('/admin')
      })
    }
  })



})


app.listen(PORT, () => {
  console.log(`el server esta corriendo en el port ${PORT}`)
});