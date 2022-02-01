import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import "../../styles/Home/home.scss";
import { supportedCurrencies, latestRates } from "../../config/dataTesting";


// ARRAY OF OBJECTS WITH TRADITIONAL CURRENCIES currency.countryName !==  "Global"
let traditionalCurrencies = supportedCurrencies.filter(currency => currency.countryName !==  "Global");
// ARRAY OF OBJECTS WITH CRYPTO CURRENCIES currency.countryCode ===  "Crypto"
let cryptoCurrencies = supportedCurrencies.filter(currency => currency.countryCode ===  "Crypto");
// ARRAY OF OBJECTS WITH METAL CURRENCIES currency.countryCode ===  "Metal", I'm not planning to use it as the free subscription doesnt
// provide much information.
// let metalCurrencies = supportedCurrencies.filter(currency => currency.countryCode ===  "Metal");

//OBJECT WITH COUNTRY CODE KEY AND RATE VALUE {{"countrycode": "rate"}, {}..}
let rates = latestRates.rates;
//ARRAY WITH ALL THE KEYS CONTAINS IN THE RATES VARIABLE.
let arrayRatesKeys = Object.keys(rates);

let traditionalCurrenciesRates = traditionalCurrencies; // to assign this array to another one to keep the original unchanged.

// ADDING PROPERTY RATES WITH THE VALUE TO THE OBJECTS IN THE TRADITIONALCURRENCIES ARRAY 
traditionalCurrenciesRates.forEach( currency => {
  if (arrayRatesKeys.includes(currency.currencyCode)){
    let rate = rates[currency.currencyCode];
    currency.rate = Number(rate); //value to be expressed in number type.
  }
});


// SORTING THE ARRAY OF TRADITIONAL CURRENCIES RATES WITH .sort() methods 
traditionalCurrenciesRates.sort(function (a, b) {
  return b.rate - a.rate;
});


traditionalCurrenciesRates.splice(0, 19);

export default function Home() {
  return (
    <Container>
      <h1 className="main-heading">supportedCurrencies {supportedCurrencies.length}</h1>
      <h1 className="main-heading">traditionalCurrencies {traditionalCurrencies.length}</h1>
      <h1 className="main-heading">cryptoCurrencies {cryptoCurrencies.length}</h1>
      <h1 className="main-heading">latestRates {Object.keys(latestRates.rates).length}</h1>
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    </Container>
  );
  
}
