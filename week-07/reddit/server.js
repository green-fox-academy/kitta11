'use strict';
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ZORRAverde911',
  database: 'reddit',
});

app.use('/assets', express.static('assets'));

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

app.get('/api/posts', (req, res) => {
  let basicquery = `select * from posts`;
  connection.query(basicquery, (err, posts) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      posts,
    })
  })
})

const insertPost = (title, url) => {
  connection.query(`INSERT INTO posts (title, url) VALUES ('${title}', '${url}')`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    } else {
      console.log(`Data were inserted into the database: ${result}`)
    }
  })
}


app.post('/api/posts/', jsonParser, (req, res) => {
  if (req.body.title && req.body.url) {
    let title = req.body.title;
    let url = req.body.url;
    insertPost(title, url);
    let newRecord = {};
    connection.query(`SELECT * from posts WHERE title LIKE '${title}'`, (err, result) => {
      if (err) {
        console.log(err.toString());
        return;
      }
      newRecord = result[0];
      console.log(newRecord)
      res.json({
        "id": newRecord.id,
        "title": newRecord.title,
        "url": newRecord.url,
        "timestamp": newRecord.timestamp,
        "score": newRecord.score,
      });
    })
  } else {
    console.log(`data was not provided`)
  }
})

app.put('/api/posts/:id/upvote', jsonParser, (req, res) => {
  let post_id = req.params.id;
  connection.query(`UPDATE posts SET score = score+1 WHERE id=${post_id}`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
  })
  let newRecord = {};
  connection.query(`SELECT * from posts WHERE id LIKE '${post_id}'`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    newRecord = result[0];
    console.log(newRecord)
    res.json({
      "id": newRecord.id,
      "title": newRecord.title,
      "url": newRecord.url,
      "timestamp": newRecord.timestamp,
      "score": newRecord.score,
    });
  })
})

app.put('/api/posts/:id/downvote', jsonParser, (req, res) => {
  let post_id = req.params.id;
  connection.query(`UPDATE posts SET score = score-1 WHERE id=${post_id}`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
  })
  let newRecord = {};
  connection.query(`SELECT * from posts WHERE id LIKE '${post_id}'`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    newRecord = result[0];
    console.log(newRecord)
    res.json({
      "id": newRecord.id,
      "title": newRecord.title,
      "url": newRecord.url,
      "timestamp": newRecord.timestamp,
      "score": newRecord.score,
    });
  })
})

app.listen(PORT, () => {
  console.log(`el server esta corriendo en el port ${PORT}`)
});