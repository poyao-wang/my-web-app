import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class CustomNavbar extends Component {
  state = {};
  render() {
    return (
      <Navbar
        bg="light"
        expand="sm"
        id="navbar-main"
        className="navbar-light fixed-top"
      >
        <Navbar.Brand href="/">BoyoWang</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#jumbo">Top</Nav.Link>
            <Nav.Link href="#profile-div">Profile</Nav.Link>
            <Nav.Link href="#exp-div">Experiences</Nav.Link>
            <Nav.Link href="#abi-div">Abilities</Nav.Link>
            <Nav.Link href="#proj-div">Projects</Nav.Link>
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
