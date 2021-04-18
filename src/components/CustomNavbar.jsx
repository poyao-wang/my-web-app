import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

function CustomNavbar({ data }) {
  const mainLinks = data.mainLinks;
  return (
    <Navbar id="navbar-main" className="navbar-dark top">
      <Navbar.Brand href="/">
        <img src="/assets/pyLogo-02.png" alt="pyLogo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={mainLinks[0].href}>{mainLinks[0].title}</Nav.Link>
          <Nav.Link href={mainLinks[1].href}>{mainLinks[1].title}</Nav.Link>
          <Nav.Link href={mainLinks[2].href}>{mainLinks[2].title}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
