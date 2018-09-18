'use strict'
const express = require('express');
const app = express();
const PORT = 3011;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.send('todo va bien')
})

let Hypher = require('hypher'),
  english = require('hyphenation.en-us'),
  h = new Hypher(english);


function cammelizer(inputString, language) {
  if (language === 'hu') {
    let myRegexp = /[a,á,e,é,i,í,o,ó,ö,ő,u,ú,ü,ű]/i;
    let camellizedArray = inputString.split('').map(elem => {
      if (myRegexp.test(elem)) {
        return elem + 'v' + elem;
      } else {
        return elem;
      }
    })
    return camellizedArray.join('')
  } else if (language === 'eng') {
    let hyphenated = h.hyphenate(inputString)
    const gibberish = ['idig', 'uddag', 'uvug', 'uthug'];

    let camellizedArray = hyphenated.map(elem => {
      return elem + gibberish[Math.floor(Math.random() * 4)]
    })
    return camellizedArray.join('')

  }
}

app.post('/translate', jsonParser, (req, res) => {
  if (req.body.lang === 'hu') {
    res.json({
      "translated": cammelizer(req.body.text, 'hu'),
      "lang": "teve"
    })
  } else if (req.body.lang === 'eng') {
    res.json({
      "translated": cammelizer(req.body.text, 'eng'),
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