import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Converter from './containers/Converter/converter';
import FinanceNews from './containers/FinanceNews/financeNews';
import Home from './containers/Home/home';


export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Converter</Link>
          </li>
          <li>
            <Link to="/dashboard">Finance News</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/converter" element={<Converter/>} />
          <Route path="/dashboard" element={<FinanceNews/>} />
        </Routes>
          
      </div>
    </Router>
  );
}

