'use strict';
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
});

app.get('/api/news', (req, res) => {
  let url = [
    `https://api.nytimes.com/svc/search/v2/articlesearch.json`,
    '?',
    `api-key=413894ab1fce4bd982375b673d06eaa5`,
    `&`,
    `q=moon-landing, apollo11&`,
    `&`,
    `fl=headline, snippet, pub_date, web_url`
  ].join('');

  fetch(url)
    .then((resp) => (resp.json()))
    .then(response => {
      res.json(response);
    });
}
)

app.listen(PORT, () => {
  console.log(`el server esta funcionando en el port: ${PORT}`);
})