// pages/index.js

export default function Home() {
    const places = [
      {
        "nome": "Curitiba",
        "latitude": 40.7128,
        "longitude": -74.0060
      },
      {
        "nome": "Sao Paulo",
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      {
        "nome": "Florianopolis",
        "latitude": 51.5074,
        "longitude": -0.1278
      }
    ];
  
    return (
      <div>
        <h1>Locais (coordenadas no Brasil):</h1>
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
  



