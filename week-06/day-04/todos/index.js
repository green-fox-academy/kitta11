'use strict'
const express = require('express');
const PORT = 3003;
const app = express();

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    todos,
  })
})

app.listen(PORT, () => {
  console.log(`the fantastic server is running on port: ${PORT}`)
})


