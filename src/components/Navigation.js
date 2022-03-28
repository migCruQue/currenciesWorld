

import React from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";

//React Router Components
import { Link } from "react-router-dom";
//Style
import "./Navigation.scss";
//icons
import logoBrand from "./icons/currency-exchange.svg";




export default function Navigation() {
  return (
    <>
        <div>
            <Navbar className="pt-4 pb-4" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img className="logoBrand" src={logoBrand} alt="cash coin logo"/>
                        Currency World
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-space-evenly">
                        <Nav>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/converter">Converter</Nav.Link>
                            <Nav.Link as={Link} to="/finance_news">Finance News</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </>
);
}
