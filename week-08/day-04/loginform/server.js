const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
// const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.post('/postElements', (req, res, err) => {
  console.log(req.body);
  res.json(req.body)
})

app.listen(PORT, () => {
  console.log(`el server esta corriendo en el port: ${PORT}`);
})