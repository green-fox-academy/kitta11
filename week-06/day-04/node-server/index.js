'use strict'
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')

app.use('/assets', express.static('assets'));

app.get('/ping', (req, res) => {
  //res.send('pong');
  res.json({
    message: 'pongjasssson',
    status: 111
  })
});

//dont do this
// app.get('/assets/style.css', (req, res) => {
// res.sendFile(path.join(__dirname, 'assets', 'style.css'));
// });

app.get('/', (req, res) => {
  //_dirname
  console.log(__dirname);
  //the path is part of express so we can use this to define filepath like this
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(PORT, () => {
  console.log(`the server is up and running on port: ${PORT}`)
})

