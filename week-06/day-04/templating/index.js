'use strict'
const express = require('express');
const app = express();
const PORT = 3001;

//we set up the view engine for the given application
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Homepage',
    header: 'Greenfox Academy',
  });
})
//
app.get('/products/:id', (req, res) => {
  console.log(req.query.fox)
  res.render('home', {
    title: 'Product page',
    header: req.params.id,
    withGoodbye: req.query.withGoodbye === 'true',
  });
})

app.listen(PORT, () => {
  console.log(`the server is up and running on port: ${PORT}`)
})