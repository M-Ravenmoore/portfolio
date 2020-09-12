const express = require('express');
const app = express();
const PORT = process.env.PORT;

require('dotenv').config();

app.use(express.static('./public'));

app.get('/', function (request, response) {
  response.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})