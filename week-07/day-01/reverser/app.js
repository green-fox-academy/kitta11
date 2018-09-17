'use strict';
const sithVersion = require("./sithrev");
const express = require('express');
const app = express();
const PORT = 3011;

console.log(sithVersion);

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.send('todo va bien')
})

app.post('/sith', jsonParser, (req, res) => {
  let text = req.body.text;
  if (!text || text.length === 0) {
    res.json({
      error: `Feed me some text you have to, padawan young you are. Hmmm.`
    })
  } else {
    res.json({
      "sith_text": sithVersion(req.body.text)
    })
  }
})

app.listen(PORT, () => {
  console.log(`el server esta corriendo en el port: ${PORT}`)
})