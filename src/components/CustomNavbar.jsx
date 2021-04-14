import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      // <nav
      //   id="navbar-main"
      //   className="navbar navbar-expand-sm navbar-light bg-light fixed-top"
      // >
      //   <a className="navbar-brand" href="/">
      //     Boyo
      //   </a>
      //   <ul className="nav nav-pills">
      //     <li className="nav-item">
      //       <a className="nav-link" href="#jumbo">
      //         Top
      //       </a>
      //     </li>
      //     <li className="nav-item">
      //       <a className="nav-link" href="#profile-div">
      //         Profile
      //       </a>
      //     </li>
      //     <li className="nav-item">
      //       <a className="nav-link" href="#exp-div">
      //         Experiences
      //       </a>
      //     </li>
      //     <li className="nav-item">
      //       <a className="nav-link" href="#abi-div">
      //         Abilities
      //       </a>
      //     </li>
      //     <li className="nav-item">
      //       <a className="nav-link" href="#proj-div">
      //         Projects
      //       </a>
      //     </li>
      //   </ul>
      // </nav>
    );
  }
}

export default CustomNavbar;
