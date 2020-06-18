import React from "react";

const ResultList = (props) => {
  const { countries } = { ...props };

  if (countries.length === 1) {
      return (
          <CountryExpanded country ={countries[0]}/>
      )
  }

  if (countries.length <= 10)
    return (
      <>
        {countries.map((c) => (
          <CountryResult country={c}></CountryResult>
        ))}
      </>
    );

    return <p>too many results ya shit</p>
};

const CountryExpanded = (props) => {
    const {country} = {...props}

    return (
        <>
            <h2>{country.name}</h2>
            <p>capital: {country.capital}
            <br/>
            population: {country.population}</p>
            <h3>languages</h3>
            <ul>
                {country.languages.map(lang => (
                    <li id={lang.name}>{lang.name}</li>
                ))}
            </ul>
            <img src={country.flag}></img>
        </>
    )
}

const CountryResult = (props) => {
  const { country } = { ...props };

  return <p key={country.name}>{country.name}</p>;
};

export default ResultList;
