import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const CityMap = () => {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/data/city');
        setCityData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
   <h1>City Data</h1>
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {cityData.map((city, index) => (
        <Marker key={index} position={[city.lat, city.lng]}>
          <Popup>
            <div>
              <h3>{city.name}</h3>
              <p>Population: {city.population}</p>
              <p>Country: {city.country}</p>
              {/* Add more data fields as needed */}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </>
  );
};

export default CityMap;
