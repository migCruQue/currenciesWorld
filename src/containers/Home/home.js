import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import "../../styles/Home/home.scss";
import { supportedCurrencies, latestRates } from "../../config/dataTesting";


// ARRAY OF OBJECTS WITH TRADITIONAL CURRENCIES currency.countryName !==  "Global"
let traditionalCurrencies = supportedCurrencies.filter(currency => currency.countryName !==  "Global");
// ARRAY OF OBJECTS WITH CRYPTO CURRENCIES currency.countryCode ===  "Crypto"
// let cryptoCurrencies = supportedCurrencies.filter(currency => currency.countryCode ===  "Crypto");
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
    currency.rate = (Number(rate)% 1 !== 0) ?  Number(rate).toFixed(2) : Number(rate); //value to be expressed in number type and fixed it to 2 decimals.
  }
});


// SORTING THE ARRAY OF TRADITIONAL CURRENCIES RATES WITH .sort() methods 
let tradCurrSorted = traditionalCurrenciesRates.sort(function (a, b) {
  return b.rate - a.rate;
});


let twentyfiveElements = tradCurrSorted.slice(0, 25);

export default function Home() {


  return (
    <Container>
      {/* <h1 className="main-heading">the 25 most valuable currencies in the world</h1> */}
      <h2 className="main-heading">API INFO: DATE AND TIME: {latestRates.date} BASE: {latestRates.base}</h2>
      <Table className="table table-success" striped bordered hover>
          <caption>the 25 most valuable currencies in the world</caption>
          <thead>
            <tr>
              <th>RANK</th>
              <th>CURRENCY NAME</th>
              <th>COUNTRY</th>
              <th>CODE</th>
              <th>RATE</th>
            </tr>
          </thead>
          <tbody>
            {twentyfiveElements.map((element, index) => {
              return (
                <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{element.currencyName}</td>
                <td>
                  <img className="flagIcon roundedCircle" src={element.icon} alt={element.icon} /> 
                  {element.countryName}
                </td>
                <td>{element.currencyCode}</td>
                <td>{element.rate}</td>
              </tr>
              );
            })}
          </tbody>
        </Table>
    </Container>
  );
  
}
