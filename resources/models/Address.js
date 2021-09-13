const mongoose = require('mongoose');
const AddressSchema = new mongoose.Schema({
  cep: {
    type: String,
    required: true,
  },
  logradouro: {
    type: String,
    required: true
  },
  complemento: {
    type: String,
    required: true
  },
  bairro: {
    type: String,
    required: true
  },
  localidade: {
    type: String,
    required: true
  },
  uf: {
    type: String,
    required: true
  },
  ddd: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('address', AddressSchema);