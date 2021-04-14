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
import Skills from "./Skills";

class Home extends Component {
  state = {};
  render() {
    return (
      <div id="main-container">
        <div id="jumbo" className="d-flex  align-items-center flex-column">
          <h1>Poyao Wang</h1>
          <p>Designer / Front-end / Back-end Developer</p>
          {/* <Link to="About">
            <Button className="primary">About</Button>
          </Link> */}
        </div>
        <About />
        {/* <Profile /> */}
        {/* <Exp /> */}
        {/* <Abilities /> */}
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Home;
