import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
import Profile from "./Profile";
import Exp from "./Exp";
import Abilities from "./Abilities";
import Projects from "./Projects";
import Contact from "./Contact";

class Home extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <Jumbotron id="jumbo">
          <h2>Poyao Wang</h2>
          <p>This is the website of Boyo.</p>
          {/* <Link to="About">
            <Button className="primary">About</Button>
          </Link> */}
        </Jumbotron>
        <Profile />
        <Exp />
        <Abilities />
        <Projects />
        <Contact />
      </Container>
    );
  }
}

export default Home;
