
//REACT
import React from 'react';
//REACT-ROUTER-DOM
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
//REACT-BOOTSTRAP COMPONENTS
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

//COMPONENTS
// import Converter from './containers/Converter/converter';
// import FinanceNews from './containers/FinanceNews/financeNews';
// import Home from './containers/Home/home';
import NavbarComp from './components/NavComp';


export default function App() {
  return (
    <NavbarComp/>

    // <Router>
    //   <div>
    //     <Navbar bg="light" expand="lg">
    //       <Container>
    //         <Navbar.Brand>Currencies World</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
              
    //           <Nav className="me-auto">
    //             <Nav.Link href="/currenciesWorld">Home</Nav.Link>
    //             <Nav.Link href="/converter">Converter</Nav.Link>
    //             <Nav.Link href="/finance_news">Finance News</Nav.Link>
    //           </Nav>
    //         </Navbar.Collapse>
    //       </Container>
    //     </Navbar>

    //     <Navbar bg="primary">
    //       <Navbar.Brand>
    //         logo
    //       </Navbar.Brand>
    //     </Navbar>

    //     <hr />
    //     <Routes>
    //         <Route exact path="/currenciesWorld" element={<Home/>} />
    //         <Route path="/converter" element={<Converter/>} />
    //         <Route path="/finance_news" element={<FinanceNews/>} />
    //       </Routes>
          
    //   </div>
    // </Router>
  );
}

