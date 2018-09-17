'use strict'
const express = require('express');
const app = express();
const PORT = 3011;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.send('todo va bien')
})

function cammelizer(inputString) {
  let myRegexp = /[a,á,e,é,i,í,o,ó,ö,ő,u,ú,ü,ű]/i;
  let camellizedArray = inputString.split('').map(elem => {
    if (myRegexp.test(elem)) {
      return elem + 'v' + elem;
    } else {
      return elem;
    }
  })
  return camellizedArray.join('')

}

app.post('/translate', jsonParser, (req, res) => {
  if (req.body.lang === 'hu') {
    res.json({
      "translated": cammelizer(req.body.text),
      "lang": "teve"
    })
  } else {
    req.json({
      "error": "I can't translate that!"
    })
  }
})


app.listen(PORT, () => {
  console.log(`el server esta corriendo en el port: ${PORT}`)
})