import React from 'react';

function WeatherContainer({ country }) {
    return (
      <> 
<h4>{country.name}</h4>
<p>{country.degrees}°C<img src={country.src} alt={country.name}></img></p>
      </>
    );
  }
  export default WeatherContainer;