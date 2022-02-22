
//REACT
import React from 'react';
//REACT-ROUTER-DOM
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
//REACT-BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//COMPONENTS
import Converter from './containers/Converter/converter';
import FinanceNews from './containers/FinanceNews/financeNews';
import Home from './containers/Home/home';


export default function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Currencies World</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <Link to="/currenciesWorld">Home</Link>
                </Nav.Link>
                <Nav.Link href="#home">
                  <Link to="/converter">Converter</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/finance_news">Finance News</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <hr />
        {/* <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/converter" element={<Converter/>} />
          <Route path="/finance_news" element={<FinanceNews/>} />
        </Routes> */}
        <Routes>
            <Route exact path="/currenciesWorld" element={<Home/>} />
            <Route path="/converter" element={<Converter/>} />
            <Route path="/finance_news" element={<FinanceNews/>} />
          </Routes>
          
      </div>
    </Router>
  );
}

