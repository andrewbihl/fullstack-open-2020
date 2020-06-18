import React, { useState } from "react";

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
    </>
  );
};

const CountryResult = (props) => {
  const { country, expandedInitially } = { ...props };

  const [expanded, setExpanded] = useState(expandedInitially)

  return expanded ? (
    <CountryExpanded key={country.name} country={country}></CountryExpanded>
  ) : (
    <p key={country.name}>{country.name}
    <button onClick={() => {setExpanded(true)}}>Show!</button>
    </p>
  );
};

export default ResultList;
