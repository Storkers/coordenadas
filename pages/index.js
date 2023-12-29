// pages/index.js

import fs from 'fs';

export default function Home({ places }) {
  return (
    <div>
      <h1>Locais (coordenadas):</h1>
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            {place.nome} - {place.latitude}, {place.longitude}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  let places = [];

  try {
    const data = fs.readFileSync('places.json', 'utf8');
    places = JSON.parse(data);
    console.log('Conteúdo do arquivo places.json:', places);
  } catch (error) {
    console.error('Erro ao ler o JSON do arquivo places.json:', error);
  }

  return {
    props: {
      places,
    },
  };
}



