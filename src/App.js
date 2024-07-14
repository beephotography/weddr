import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=48.5459&longitude=10.8518&current_weather=true')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Wetterdaten</h1>
        {data ? (
          <div>
            <p>Temperatur: {data.current_weather.temperature}°C</p>
            <p>Luftfeuchtigkeit: {data.current_weather.relative_humidity}%</p>
            <p>Gefühlte Temperatur: {data.current_weather.apparent_temperature}°C</p>
            <p>Tag/Nacht: {data.current_weather.is_day ? 'Tag' : 'Nacht'}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;

