import React from 'react';
import Container from 'react-bootstrap/Container';
// STYLE
import "./home.scss";
import { supportedCurrencies, latestRates } from "../../config/dataTesting";
//COMPONENTS
import CurrenciesTable from "../Home/CurrenciesTable/CurrenciesTable";
import InfoAPI from "./InfoAPI/InfoAPI";


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

let objectData = twentyfiveElements;

export default function Home() {
  return (
    <Container>
        <InfoAPI 
          date={latestRates.date}
        />
        <CurrenciesTable 
          objectData={objectData} 
        />
    </Container>
  );
  
}
