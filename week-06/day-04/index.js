'use strict'
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`the server is up and running on port: ${PORT}`)
})

