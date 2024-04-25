
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

mongoose.connect("mongodb+srv://habebabakr4:rkKSb8qZuAUfOjYk@qreebdb.eqrzmci.mongodb.net/?retryWrites=true&w=majority&appName=Qreebdb")
     


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});