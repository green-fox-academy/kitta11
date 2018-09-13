'use strict'
const express = require('express');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    name: req.query.name,
    title: 'Greeting to the world'
  })
})


app.listen(PORT, () => {
  console.log(`the server is running on port: ${PORT}`)
})