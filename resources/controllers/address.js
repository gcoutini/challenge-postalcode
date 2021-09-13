const axios = require('axios');

const Address = require('../models/Address');

const handleAddress = async (req, res) => {
  const zipcode = req.query.zipcode;
  const { data } = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`);
  if (data.erro) {
    console.log('CEP não encontrado!');
    return res.status(404).json({ message: "CEP não encontrado!" });
  }
  const { ibge, gia, siafi, ...parsedAddress } = data;
  const { cep } = parsedAddress;

  const cepExists = await Address.findOne({ cep }); 

  if (cepExists) {
    const oneDay = 86400000;
    const { updatedAt } = cepExists;
    const isDocOutdated = ((new Date() - updatedAt) / oneDay) > 30 ? true : false;
    if (isDocOutdated) {
      await Address.updateOne({ cep }, parsedAddress);
      console.log('O CEP foi atualizado!');
      return res.status(200).json(parsedAddress);
    }
    console.log('CEP cadastrado há menos de 30 dias!');
    return res.status(400).json(parsedAddress);
  }
  let address = new Address(parsedAddress);
  await address.save();
  console.log('CEP cadastrado com sucesso!');
  res.status(201).json(parsedAddress);
}

module.exports = handleAddress;