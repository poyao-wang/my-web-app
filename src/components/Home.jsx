import React, { Component } from "react";

import "./Home.css";
import About from "./About";
import Contact from "./Contact";
import CustomNavbar from "./CustomNavbar";
import Projects from "./Projects";
import Skills from "./Skills";

const data = {
  navBar: {
    mainLinks: [
      { title: "My Skills", href: "#skills-div" },
      { title: "My Works", href: "#proj-div" },
      { title: "Contact", href: "#contact-div" },
    ],
  },
  jumbo: {
    title: "Poyao Wang",
    subtitle: "Designer / Front-end / Back-end Developer",
  },
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
  skills: {
    title: "My Skills",
    subtitle: "JavaScript centered development path",
    skillsData: {
      lefter: {
        imgSrc: "assets/skills/lefter-1.png",
        title: "Git",
      },
      left1: {
        imgSrc: "assets/skills/left-1.png",
        title: "Play Sotre",
      },
      left2: {
        imgSrc: "assets/skills/left-2.png",
        title: "App Store",
      },
      mid1: {
        imgSrc: "assets/skills/mid-1.png",
        title: "Node.JS",
      },
      mid2: {
        imgSrc: "assets/skills/mid-2.png",
        title: "Javascript",
      },
      mid3: {
        imgSrc: "assets/skills/mid-3.png",
        title: "React",
      },
      right1: {
        imgSrc: "assets/skills/right-1.png",
        title: "HTML",
      },
      right2: {
        imgSrc: "assets/skills/right-2.png",
        title: "CSS",
      },
      righter: {
        imgSrc: "assets/skills/righter-1.png",
        title: "Adobe Apps",
      },
    },
  },
  projects: {
    title: "My Works",
    subtitle: "Feel free to browse my works on GitHub",
    cards: [
      {
        imgSrc: "assets/project1.png",
        imgOnLeft: true,
        cardTitleText: "TabaTImer",
        cardText: "A simple workout timer\niOS / Android app",
        btnLink: "https://github.com/poyao-wang/tabatimer",
        btnText: "Learn More",
      },
      {
        imgSrc: "assets/project2.png",
        imgOnLeft: false,
        cardTitleText: "Poyao.Wang",
        cardText: "This React webpage app\nDeployed on Firebase.",
        btnLink: "https://github.com/poyao-wang/my-web-app",
        btnText: "Learn More",
      },
      {
        imgSrc: "assets/project3.png",
        imgOnLeft: true,
        cardTitleText: "Motor Controller",
        cardText: "Raspberry Pi motor controller\nCoded in Python.",
        btnLink: "https://github.com/BoyoWang/control-box",
        btnText: "Learn More",
      },
    ],
  },
  contacts: {
    title: "Contact",
    subtitle: "Interested in my work? Feel free to contact me.",
    contactIcons: [
      {
        text: "Linkedin",
        iconSrc: "assets/linkedin.png",
        href: "https://www.linkedin.com/in/poyao-wang-33860058/",
      },
      {
        text: "GitHub",
        iconSrc: "assets/github.png",
        href: "https://github.com/poyao-wang",
      },
      {
        text: "E-mail",
        iconSrc: "assets/email.png",
        href: "mailto:poyaowang.taiwan@gmail.com",
      },
    ],
  },
};

class Home extends Component {
  state = {};
  render() {
    return (
      <div id="main-container">
        <CustomNavbar data={data.navBar} />
        <div id="jumbo" className="d-flex  align-items-center flex-column">
          <h1>Poyao Wang</h1>
          <p className="h1-subtitle">{data.jumbo.subtitle}</p>
        </div>
        <About data={data.about} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
        <Contact data={data.contacts} />
      </div>
    );
  }
}

export default Home;
