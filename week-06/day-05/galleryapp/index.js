'use strict';
const express = require('express');
const app = express();
const PORT = 3006;

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Gallery',

  });
})

app.listen(PORT, () => {
  console.log(`Este server fantastico is up and running on port: ${PORT}`)
})