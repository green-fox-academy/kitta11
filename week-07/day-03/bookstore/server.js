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

  if (pubQ && !catQ && !pltQ && !pgtQ) {
    let queryExtension = ` WHERE pub_name LIKE '%${pubQ}%'`;
    basicquery = basicquery.concat(queryExtension);
  } else if (!pubQ && catQ && !pltQ && !pgtQ) {
    let queryExtension = ` WHERE cate_descrip LIKE '${catQ}'`;
    basicquery = basicquery.concat(queryExtension);
  } else if (pubQ && catQ && !pltQ && !pgtQ) {
    let queryExtension = ` WHERE pub_name LIKE '%${pubQ}%' AND cate_descrip LIKE '${catQ}'`;
    basicquery = basicquery.concat(queryExtension);
  } else if (pubQ && catQ && pltQ && !pgtQ) {
    let queryExtension = ` WHERE pub_name LIKE '%${pubQ}%' AND cate_descrip LIKE '${catQ}' AND book_price<${pltQ}`;
    basicquery = basicquery.concat(queryExtension);
  } else if (pubQ && catQ && !pltQ && pgtQ) {
    let queryExtension = ` WHERE pub_name LIKE '%${pubQ}%' AND cate_descrip LIKE '${catQ}' AND book_price>${pgtQ}`;
    basicquery = basicquery.concat(queryExtension);
  } else if (pubQ && catQ && pltQ && pgtQ) {
    let queryExtension = ` WHERE pub_name LIKE '%${pubQ}%' AND cate_descrip LIKE '${catQ}' AND book_price>${pgtQ} AND book_price<${pltQ}`;
    basicquery = basicquery.concat(queryExtension);
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