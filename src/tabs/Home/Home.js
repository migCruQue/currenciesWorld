import React from 'react';
//Bootstrap components
import Container from 'react-bootstrap/Container';
// STYLE
import "./home.scss";
//COMPONENTS
import CurrenciesTable from "./CurrenciesTable/CurrenciesTable";
import InfoAPI from "../../components/InfoAPI/InfoAPI";



export default function Home(props) {

  const date = props.latestRates.date;

  const supportedCurrencies = props.supportedCurrencies;
  const rates = props.latestRates.rates; 

  const  arrayRatesKeys = Object.keys(rates); // getting all the keys to iterate through supportedCurrencies 
                                              //and add a new property rate to
  supportedCurrencies.forEach( currency => {
    if (arrayRatesKeys.includes(currency.currencyCode)){
      let rate = rates[currency.currencyCode];
      currency.rate = (Number(rate)% 1 !== 0) ?  Number(rate).toFixed(2) : Number(rate); //value to be expressed in number type and fixed it to 2 decimals.
    }
  });


  function topTraditionalCurrencies(data, top){
    // 1 => FILTER ONLY THE TRADITIONAL CURRENCIES
    let traditionalCurrencies = data.filter(currency => currency.countryName !==  "Global");
        // 2 => SORT THE ARRAY BY THE VALUE DECREASINGLY
    let traditionalCurrenciesSorted = traditionalCurrencies.sort(function (a, b) {
      return b.rate - a.rate;
    });
    // 3 => RETURN THE 25 MOST VALUABLE
    return traditionalCurrenciesSorted.slice(0, top);  
  }

  


  return (
      <Container>
        {supportedCurrencies && date ? 
        
        <>
          <InfoAPI date={date} />
          <CurrenciesTable tableData={topTraditionalCurrencies(supportedCurrencies, 10)} /> 
         </> :
        
        <h1>There are problems to get the info from the API</h1>}
      </Container>
  );
  
}
