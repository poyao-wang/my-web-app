import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class CustomNavbar extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="/">BoyoWang</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/News">
              News
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
