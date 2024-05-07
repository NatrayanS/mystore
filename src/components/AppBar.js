import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiRadarDish } from "react-icons/gi";
//import NavDropdown from "react-bootstrap/NavDropdown";
import Cart from "./Cart";

const AppBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className="text-primary">
            <span>
              <i>
                <GiRadarDish />
              </i>
              DTH Shop
            </span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-start">
            <Nav.Link href="#home" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#menu" className="fw-bold">
              Menu
            </Nav.Link>
            <Nav.Link href="#newoffer" className="fw-bold">
              New Offer
            </Nav.Link>
            <Nav.Link href="#contact" className="fw-bold">
              Contact us
            </Nav.Link>
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
