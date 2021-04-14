import React, { Component } from "react";
import "./Home.css";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";
import CustomNavbar from "./CustomNavbar";

class Home extends Component {
  state = {};
  render() {
    return (
      <div id="main-container">
        <CustomNavbar />
        <div id="jumbo" className="d-flex  align-items-center flex-column">
          <h1>Poyao Wang</h1>
          <p className="h1-subtitle">
            Designer / Front-end / Back-end Developer
          </p>
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Home;
