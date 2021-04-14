import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class CustomNavbar extends Component {
  state = {};
  render() {
    return (
      <Navbar id="navbar-main" className="navbar-dark top">
        <Navbar.Brand href="/">
          <img src="/assets/pyLogo-02.png" alt="pyLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#skills-div">My Skills</Nav.Link>
            <Nav.Link href="#proj-div">My Works</Nav.Link>
            <Nav.Link href="#contact-div">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
