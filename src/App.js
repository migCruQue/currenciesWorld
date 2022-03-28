
//REACT
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
//URL FETCHING DATA
import { url_supported_currencies, url_latest, key } from "./config/dataTesting";
//Axios
import axios from "axios";
//tabs
import Converter from './tabs/Converter/Converter';
import FinanceNews from './tabs/FinanceNews/FinanceNews';
import Home from './tabs/Home/Home';


export default function App() {

  const [supportedCurrencies, setSupportedCurrencies] = React.useState(null);
  const [latestRates, setLatestRates] = React.useState(null);

 
  React.useEffect(() => {

    const fetchData = async () => {
      await axios.get(url_supported_currencies)
      .then((response) => {
        if(response.status >= 200 && response.status < 300){
          setSupportedCurrencies(response.data);
        } else {console.log("error when fetching supportedCurrencies")}
      });
      await axios.get(`${url_latest}${key}`)
      .then((response) => {
        if(response.status >= 200 && response.status < 300){
          setLatestRates(response.data);
        } else {console.log("error when fetching latestRates")}
      });
    
    }

    fetchData();    
  }, []);


  return (
    <Router>
      <Navigation />
       <Routes>
        <Route index path="/" 
          element={<Home 
            supportedCurrencies={supportedCurrencies}
            latestRates={latestRates}
            />}
        />
        <Route path="/converter" element={<Converter
            supportedCurrencies={supportedCurrencies}
            latestRates={latestRates}
          />} 
        />
        <Route path="/finance_news" element={<FinanceNews/>} />
      </Routes>
    </Router>
  );
}

