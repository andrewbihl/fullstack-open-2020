import React, { useState, useEffect } from "react";
import axios from "axios";

const ResultList = (props) => {
  const { countries } = { ...props };

  if (countries.length === 1) {
    return <CountryResult country={countries[0]} expanded={true} />;
  }

  if (countries.length <= 10)
    return (
      <>
        {countries.map((c) => (
          <CountryResult country={c}></CountryResult>
        ))}
      </>
    );

  return <p>too many results ya shit</p>;
};

const CountryExpanded = (props) => {
  const { country } = { ...props };

  return (
    <>
      <h2>{country.name}</h2>
      <p>
        capital: {country.capital}
        <br />
        population: {country.population}
      </p>
      <h3>languages</h3>
      <ul>
        {country.languages.map((lang) => (
          <li id={lang.name}>{lang.name}</li>
        ))}
      </ul>
      <img src={country.flag} width="25%"></img>
      <Weather></Weather>
    </>
  );
};

const Weather = (countryName) => {
  const [weatherData, setWeatherData] = useState({});
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  useEffect(() => {
    const requestURL = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${countryName}`
    axios.get(requestURL)
         .then(response => {
             console.log("response:", response)
             setWeatherData(response.data)
         })
  }, []);

  return weatherData ? <></> : <></>;
};

const CountryResult = (props) => {
  let { country, expanded } = { ...props };

  expanded = expanded ? true : false

  const [expandView, setExpandView] = useState(expanded);

  console.log(expanded === expandView)

  console.log(`${country.name} expanded: ${expandView}`)

  return expandView ? (
    <CountryExpanded key={country.name} country={country}></CountryExpanded>
  ) : (
    <p key={country.name}>
      {country.name}
      <button
        onClick={() => {
          setExpandView(true);
        }}
      >
        Show!
      </button>
    </p>
  );
};

export default ResultList;
