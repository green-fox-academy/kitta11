'use strict';
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// const _ = require('lodash');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.json({
      "received": req.query.input,
      "result": 2 * req.query.input
    })
  } else {
    res.json({
      error: "Please provide an input!",
    });
  }
})

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
    })
  } else if (!req.query.name) {
    res.json({
      error: `Please provide a name!`,
    })
  } else if (!req.query.title) {
    res.json({
      error: `Please provide a title!`,
    })
  } else {
    res.json({
      error: `Please provide a name and a title!`,
    })
  }
})

app.get('/appenda/:appendable', (req, res) => {
  if (req.params.appendable) {
    let appendable = req.params.appendable;
    let addedChar = 'a';
    let appended = appendable.concat(addedChar);
    res.json({
      "appended": appended,
    })
  } else {
    res.json({
      error: '404'
    })
  }
})

function sumUntil(inputNumber) {
  if (inputNumber > 0) {
    return inputNumber + sumUntil(inputNumber - 1);
  } else {
    return 0;
  }
}

function multiplyUntil(inputNumber) {
  if (inputNumber > 1) {
    return inputNumber * multiplyUntil(inputNumber - 1);
  } else {
    return 1;
  }
}
app.post('/dountil/:action', jsonParser, (req, res) => {
  let sumResult = sumUntil(req.body.until);
  let multipResult = multiplyUntil(req.body.until)
  if (req.params.action === 'sum') {
    res.json({
      "result": sumResult
    })
  } else if (req.params.action === 'factor') {
    res.json({
      "result": multipResult
    })
  } else {
    res.json({
      error: "Please provide a valid action"
    })
  }
})


app.listen(PORT, () => {
  console.log(`Buenas dias a todos, este server funciona el el port: ${PORT}`)
})