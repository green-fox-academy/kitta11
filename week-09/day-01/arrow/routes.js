'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/yondu', (req, res) => {
  let distance = req.query.distance;
  let time = req.query.time;
  if (distance && time) {
    if (time != 0) {
      res.status(200).json({
        "distance": distance,
        "time": time,
        "speed": distance / time
      })
    } else {
      res.status(400).json({
        "error": "time can not be zero"
      })
    }
  } else {
    res.status(400).json({
      "error": "no data provided"
    })
  }
})

module.exports = app;