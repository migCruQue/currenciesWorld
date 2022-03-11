

import React, { Component } from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";

//React Router Components
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
//Style
import "./NavComp.scss";
import Converter from '../containers/Converter/converter';
import FinanceNews from '../containers/FinanceNews/financeNews';
import Home from '../containers/Home/home';

export default class NavbarComp extends Component {
    render() {
        return (

            <Router>
                <div>
                    <Navbar className="pt-4 pb-4" bg="dark" variant="dark" expand="lg">
                        <Container>
                            <Navbar.Brand>Currency World</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className="ms-5 justify-content-center">
                                <Nav className="flex-grow-1 justify-content-space-evenly">
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/converter">Converter</Nav.Link>
                                    <Nav.Link as={Link} to="/finance_news">Finance News</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/converter" element={<Converter/>} />
                    <Route path="/finance_news" element={<FinanceNews/>} />
                </Routes>
                </div>
            </Router>
        );
    }
}