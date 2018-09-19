'use strict';
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use('/assets', express.static('assets'));

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ZORRAverde911',
  database: 'bookstore',
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})


connection.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.get('/api/books', (req, res) => {
  connection.query(`select book_name, aut_name, pub_name, cate_descrip, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id INNER JOIN category ON book_mast.cate_id = category.cate_id;`, (err, results) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    console.log(results);
    res.send(results);
  })
});

// app.get('/api/books', (req, res) => {
//   connection.query(`select book_name, aut_name, pub_name, cate_descrip, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id INNER JOIN category ON book_mast.cate_id = category.cate_id;`), (err, results) => {
//     if (err) {
//       console.log(err.toString());
//       res.status(500).send('Database error');
//       return;
//     }
//     console.log(results);
//     res.send(results);
//   }
// })

app.listen(PORT, () => {
  console.log(`el server fantastico esta corriendo en el port: ${PORT}`);
})