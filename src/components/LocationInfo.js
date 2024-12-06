import React, { useEffect, useState } from 'react';

function LocationInfo() {
  const [location, setLocation] = useState({ city: '', region: '', country: '' });

  useEffect(() => {
    fetch('/api/geolocation')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setLocation(data))
      .catch((error) => {
        console.error('Error fetching location:', error);
        setLocation({ city: 'Error', region: 'Error', country: 'Error' });
      });
  }, []);
  

  return (
    <div>
      <p>City: {location.city}</p>
      <p>Region: {location.region}</p>
      <p>Country: {location.country}</p>
    </div>
  );
}

export default LocationInfo;
