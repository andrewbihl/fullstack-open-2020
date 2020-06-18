import React, { useState, useEffect } from "react";
import axios from "axios";


import ResultList from "./components/ResultList"

function responseToCountryList(responseData) {
  return responseData.map((country) => ({
    name: country.name,
    population: country.population,
    languages: country.languages,
    flag: country.flag,
    capital: country.capital
  }));
}

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  function countriesFilteredByQuery() {
    return countries.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
  }


  function handleSearchChange(event) {
    setQuery(event.target.value)
  }

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(responseToCountryList(response.data));
    });
  }, []);

  return (
    <>
      <p>
        find countries <input onChange={handleSearchChange}></input>
      </p>
      <ResultList countries={countriesFilteredByQuery()}></ResultList>
    </>
  );
}

export default App;