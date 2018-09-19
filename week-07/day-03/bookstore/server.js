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
  let basicquery = `select book_name, aut_name, pub_name, cate_descrip, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id INNER JOIN category ON book_mast.cate_id = category.cate_id`
  let pubQ = req.query.publisher;
  let catQ = req.query.category;
  let pltQ = req.query.plt;
  let pgtQ = req.query.pgt;
  let pubExt = `pub_name LIKE "%${pubQ}%"`;
  let catExt = `cate_descrip LIKE "${catQ}"`;
  let pltExt = `book_price<${pltQ}`;
  let pgtExt = `book_price>${pgtQ}`;

  if (pubQ && !catQ && !pltQ && !pgtQ) {
    basicquery = `${basicquery} WHERE ${pubExt}`;
  } else if (!pubQ && catQ && !pltQ && !pgtQ) {
    basicquery = `${basicquery} WHERE ${catExt}`;
  } else if (!pubQ && !catQ && pltQ && !pgtQ) {
    basicquery = `${basicquery} WHERE ${pltExt}`;
  } else if (!pubQ && !catQ && !pltQ && pgtQ) {
    basicquery = `${basicquery} WHERE ${pgtExt}`;
  } else if (pubQ && catQ && !pltQ && !pgtQ) {
    basicquery = `${basicquery} WHERE ${pubExt} AND ${catExt}`;
  } else if (pubQ && !catQ && pltQ && !pgtQ) {
    basicquery = `${basicquery} WHERE ${pubExt} AND ${pltExt}`;
  } else if (pubQ && !catQ && !pltQ && pgtQ) {
    basicquery = `${basicquery} WHERE ${pubExt} AND ${pgtExt}`;
  } else if (!pubQ && catQ && pltQ && !pgtQ) {
    basicquery = `${basicquery} WHERE ${catExt} AND ${pltExt}`;
  } else if (!pubQ && catQ && !pltQ && pgtQ) {
    basicquery = `${basicquery} WHERE ${catExt} AND ${pgtExt}`;
  } else if (!pubQ && !catQ && pltQ && pgtQ) {
    basicquery = `${basicquery} WHERE ${pltExt} AND ${pgtExt}`;
  } else if (pubQ && catQ && pltQ && !pgtQ) {
    basicquery = `${basicquery} WHERE ${pubExt} AND ${catExt} AND ${pltExt}`;
  } else if (pubQ && catQ && !pltQ && pgtQ) {
    basicquery = `${basicquery} WHERE ${pubExt} AND ${catExt} AND ${pgtExt}`;
  } else if (pubQ && !catQ && pltQ && pgtQ) {
    basicquery = `${basicquery} WHERE ${pubExt} AND ${pltQ} AND ${pgtExt}`;
  } else if (!pubQ && catQ && pltQ && pgtQ) {
    basicquery = `${basicquery} WHERE ${catExt} AND ${pltQ} AND ${pgtExt}`;
  } else if (pubQ && catQ && pltQ && pgtQ) {
    basicquery = `${basicquery} WHERE ${pubExt} AND ${catExt} AND ${pltExt} AND ${pgtExt}`;
  }

  connection.query(basicquery, (err, results) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.send(results);
  })

})


app.listen(PORT, () => {
  console.log(`el server fantastico esta corriendo en el port: ${PORT}`);
})