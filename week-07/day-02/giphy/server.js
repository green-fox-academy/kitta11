'use strict'
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch');
app.use(cors());
app.options('*', cors());
app.use('/assets', express.static('assets'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/giphy/:q', (req, res) => {
  let url = [
    `https://api.giphy.com/v1/gifs/search?api_key=MLozqAHGCLAaqAVavXZWPdmpf1w0wbOO&`,
    `q=${req.params.q}&`,
    `limit=16&offset=0&rating=G&lang=en`
  ].join('');
  fetch(url)
    .then((resp) => (resp.json()))
    .then(response => {
      res.json(response);
    });
});

app.listen(PORT, () => {
  console.log(`esta server esta corriendo en el port: ${PORT}`)
})

