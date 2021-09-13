const mongoose = require('mongoose');
const AddressSchema = new mongoose.Schema({
  cep: {
    type: String,
  },
  logradouro: {
    type: String,
  },
  complemento: {
    type: String,
  },
  bairro: {
    type: String,
  },
  localidade: {
    type: String,
  },
  uf: {
    type: String,
  },
  ddd: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('address', AddressSchema);