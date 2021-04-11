import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
import Profile from "./Profile";
import Exp from "./Exp";
import Abilities from "./Abilities";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

class Home extends Component {
  state = {};
  render() {
    return (
      <Container fluid id="main-container">
        <Jumbotron id="jumbo">
          <h2>Poyao Wang</h2>
          <p>Designer / Front-end / Back-end Developer</p>
          {/* <Link to="About">
            <Button className="primary">About</Button>
          </Link> */}
        </Jumbotron>
        <About />
        {/* <Profile /> */}
        {/* <Exp /> */}
        <Abilities />
        <Projects />
        <Contact />
      </Container>
    );
  }
}

export default Home;
