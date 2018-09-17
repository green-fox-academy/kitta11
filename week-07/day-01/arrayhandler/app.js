'use strict';
const express = require('express');
const app = express();
const PORT = 3010;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.send('Tenemos una dia maravillosa')
})

app.post('/arrays', jsonParser, (req, res) => {
  let todo = req.body.what;
  let numberarray = req.body.numbers;

  if (!todo || !numberarray) {
    res.json({
      error: 'Please provide what to do with the numbers!'
    })
  } else {
    let summedArray = 0;
    numberarray.forEach(element => {
      summedArray += element;
    });
    let multipledArray = 1;
    numberarray.forEach(element => {
      multipledArray *= element;
    });
    let doubledArray = numberarray.map(element => {
      return element * 2;
    });
    if (todo === 'sum') {
      res.json({
        "result": summedArray,
      })
    } else if (todo === 'multiply') {
      res.json({
        "result": multipledArray,
      })
    } else if (todo === 'double') {
      res.json({
        "result": doubledArray,
      })
    }
  }

})

app.listen(PORT, () => {
  console.log(`El servicio esta corriendo en el port: ${PORT}`)
})
