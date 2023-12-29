// pages/api/index.js

import placesData from '../../places.json'; // Importa os dados do arquivo JSON

export default function handler(req, res) {
  // Retorna os dados do arquivo JSON como resposta à requisição
  res.status(200).json(placesData);
}


  



