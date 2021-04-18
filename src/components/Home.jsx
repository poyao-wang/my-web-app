import React, { Component } from "react";
import "./Home.css";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";
import CustomNavbar from "./CustomNavbar";

const data = {
  about: {
    title: "About Me",
    subtitle: "A Self-taught Full-Stack Developer",
    cols: [
      {
        imgSrc: "assets/about-div-img1.png",
        titleText: "Front-end",
        contentText: `ReactJS Web App / Mobile App\nHTML / CSS / JavaScript\nAdobe Ps / Ai / Xd`,
      },
      {
        imgSrc: "assets/about-div-img2.png",
        titleText: "Back-end",
        contentText: `RESTful API development\nCloud sever deployment\nNodeJS, mongoDB`,
      },
      {
        imgSrc: "assets/about-div-img3.png",
        titleText: "Languages",
        contentText: `English / Chinese / Japanese\nBusiness level language skills\nMulti-language UI`,
      },
    ],
  },
};
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
        <About data={data.about} />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Home;
