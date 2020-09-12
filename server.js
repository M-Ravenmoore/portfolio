'use strict';

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;


app.use(express.static('./public'));

app.get('/', function (request, response) {
  response.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})