'use strict';
const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

// app.use('/assets', express.static('assets'));


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'))
// })


app.get('/api/genres', (req, res) => {
  let url = `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=a174b33570b86d71044e1d8f89774a2b`;
  fetch(url)
    .then((resp) => (resp.json()))
    .then(response => {
      res.json(response);
    });
})

app.get('/api/movies/', (req, res) => {
  let url = [
    `https://api.themoviedb.org/3/discover/movie?`,
    `api_key=a174b33570b86d71044e1d8f89774a2b&`,
    `language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6`,
    `&with_genres=${req.query.genreID}`
  ].join('');
  fetch(url)
    .then((resp) => (resp.json()))
    .then(response => {
      res.json(response);
    });
});


app.listen(PORT, () => {
  console.log(`el server esta corriendo en el port: ${PORT}`);
})