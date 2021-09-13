const express = require('express');
const bodyParser = require('body-parser');
const address = require('./resources/controllers/address');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/address', address);

app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});