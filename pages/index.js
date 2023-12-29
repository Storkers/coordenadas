// Importar os dados do arquivo JSON
const placesData = require('../places.json');

// Definir a função que será executada quando o endpoint for acessado
module.exports = (req, res) => {
  // Retornar os dados como resposta à requisição
  res.status(200).json(placesData);
};

  



