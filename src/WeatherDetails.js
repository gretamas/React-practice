import React from 'react';
import WeatherContainer from './WeatherContainer';
import './WeatherDetails.css';

import lisbon from "./img/icon.png";
import paris from "./img/icon-2.png";
import belgrade from "./img/icon-3.png";
import venice from "./img/icon-4.png";
import telAvive from "./img/icon-5.png";
import cair from "./img/icon.png";
import newYork from "./img/icon-6.png";
import newDelhi from "./img/icon-7.png";
import sanFrancisco from "./img/icon-8.png";
import tokyo from "./img/icon-9.png";
import sydney from "./img/icon-10.png";

function weatherDetails() {
    const countries = [
      { id: 1, name: "Lisbon", degrees: 21, src: lisbon },
      { id: 2, name: "Paris", degrees: 11, src: paris },
      { id: 3, name: "Belgrade", degrees: 15, src: belgrade },
      { id: 4, name: "Venice", degrees: 21, src: venice },
      { id: 5, name: "Tel-Avive", degrees: 32, src: telAvive },
      { id: 6, name: "Cair", degrees: 21, src: cair },
      { id: 7, name: "New-York", degrees: 17, src: newYork },
      { id: 8, name: "New-Delhi", degrees: 17, src: newDelhi },
      { id: 9, name: "San-Francisco", degrees: 15, src: sanFrancisco },
      { id: 10, name: "Tokyo", degrees: 8, src: tokyo },
      { id: 11, name: "Sydney", degrees: 25, src: sydney },
    ];

    return(
<ul className="weather-details__list">
{countries.map((country) => {
        console.log(country);
        return (
          <li key={country.id} className={`Weather-details__${country.name}`}>
            <WeatherContainer country={country} />
          </li>
        );
      })}
</ul>
    )
}

export default weatherDetails;