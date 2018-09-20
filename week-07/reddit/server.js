'use strict';
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

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

app.listen(PORT, () => {
  console.log(`el server esta corriendo en el port ${PORT}`)
});