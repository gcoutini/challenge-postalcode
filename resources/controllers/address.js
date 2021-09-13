const axios = require('axios');

const address = async (req, res) => {
  const zipcode = req.query.zipcode;
  console.log('OLHA O ZIPCODE AI', zipcode);
  const { data } = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`);
  const { ibge, gia, siafi, ...parsedAddress } = data;
  res.send(parsedAddress);
}

module.exports = address;