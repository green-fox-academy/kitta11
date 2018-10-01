'use strict';
const express = require('express');
const app = express();


app.get('/yondu', (req, res) => {
  let distance = req.query.distance;
  let time = req.query.time;
  if (distance && time) {
    res.status(200).json({
      "distance": distance,
      "time": time,
      "speed": distance / time
    })
  }
})

module.exports = app;