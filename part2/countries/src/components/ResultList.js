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
      <Weather city={country.capital}></Weather>
    </>
  );
};

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  useEffect(() => {
    const requestURL = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
    axios.get(requestURL).then((response) => {
      console.log("response:", response);
      if (response.data.current) {
        setWeatherData(response.data.current);
      }
    });
  }, []);

  console.log(weatherData);
  return weatherData ? (
    <>
      <p>Weather in {city}</p>
      <ul>
        <li>{weatherData.temperature} celsius</li>
        <li>{weatherData.weather_descriptions}</li>
      </ul>
      {weatherData.weather_icons ? (
        <img src={weatherData.weather_icons[0]}></img>
      ) : (
        <></>
      )}
    </>
  ) : (
    <></>
  );
};

const CountryResult = (props) => {
  let { country, expanded } = { ...props };

  const [forceExpand, setForceExpand] = useState(false);

  return expanded || forceExpand ? (
    <CountryExpanded key={country.name} country={country}></CountryExpanded>
  ) : (
    <p key={country.name}>
      {country.name}
      <button
        onClick={() => {
          setForceExpand(true);
        }}
      >
        Show!
      </button>
    </p>
  );
};

export default ResultList;
