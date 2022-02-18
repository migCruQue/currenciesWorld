import React, { useState, useEffect } from 'react';
//Bootstrap components
import Container from 'react-bootstrap/Container';
// STYLE
import "./home.scss";
// fetching API
import { url_supported_currencies, url_latest, key } from "../../config/dataTesting";
//COMPONENTS
import CurrenciesTable from "../Home/CurrenciesTable/CurrenciesTable";
import InfoAPI from "./InfoAPI/InfoAPI";
//Axios
import axios from "axios";


export default function Home() {

  const [arrayData, setArrayData] = useState(null);
  const [date, setDate] = useState(null);
 
  useEffect(() => {
    // FOR THE TABLE DATA I NEED TO DO 2 API REQUEST THAT IS WHY I USE THIS PATTERN
    let supportedCurrencies = [];
    let rates = {};

    const fetchData = async () => {
      await axios.get(url_supported_currencies)
      .then((response) => {
        if(response.status >= 200 && response.status < 300){
          supportedCurrencies = response.data;
        }
      });
      await axios.get(`${url_latest}${key}`)
      .then((response) => {
        if(response.status >= 200 && response.status < 300){
          setDate(response.data.date);
          rates = response.data.rates;
        }
      });
      
      let supportedCurrenciesCopy = supportedCurrencies.slice();  // supportedCurrencies remains immutable

      const  arrayRatesKeys = Object.keys(rates);//

      supportedCurrenciesCopy.forEach( currency => {
              if (arrayRatesKeys.includes(currency.currencyCode)){
                let rate = rates[currency.currencyCode];
                currency.rate = (Number(rate)% 1 !== 0) ?  Number(rate).toFixed(2) : Number(rate); //value to be expressed in number type and fixed it to 2 decimals.
              }
            });

      setArrayData(supportedCurrenciesCopy);
    }

    fetchData();    
  }, []);





  function top25TraditionalCurrencies(data){
    // 1 => FILTER ONLY THE TRADITIONAL CURRENCIES
    let traditionalCurrencies = arrayData.filter(currency => currency.countryName !==  "Global");
        // 2 => SORT THE ARRAY BY THE VALUE DECREASINGLY
    let traditionalCurrenciesSorted = traditionalCurrencies.sort(function (a, b) {
      return b.rate - a.rate;
    });
    // 3 => RETURN THE 25 MOST VALUABLE
    return traditionalCurrenciesSorted.slice(0, 25);  
  }

  


  return (
      <Container>
        {arrayData && date ? 
        
        <>
          <InfoAPI date={date} />
          <CurrenciesTable tableData={top25TraditionalCurrencies(arrayData)} /> 
         </> :
        
        <h1>There are problems to get the info from the API</h1>}
      </Container>
  );
  
}
