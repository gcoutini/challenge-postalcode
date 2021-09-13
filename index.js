const express = require('express');
const bodyParser = require('body-parser');
const address = require('./resources/controllers/address');
const mongoose = require('./config/mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose();

app.get('/address', address);

app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});