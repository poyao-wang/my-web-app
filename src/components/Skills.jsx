import React, { Component } from "react";
import "./Skills.css";
class Skills extends Component {
  state = {};

  skillBox(imagePath = null, title = "title") {
    return (
      <div className="skill-box justify-content-center align-self-center">
        <img className="skill-img" src={imagePath} alt="Poyao Wang" />
        <p>{title.toUpperCase()}</p>
      </div>
    );
  }

  render() {
    return (
      <div fluid className="skills-div main-divs" id="skills-div">
        <div className="justify-content-center">
          <h2>My Skills</h2>
          <p className="lead">JavaScript centered development path</p>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div className="d-none d-sm-none d-md-flex justify-content-center align-self-center">
            {this.skillBox("assets/skills/lefter-1.png", "git")}
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            {this.skillBox("assets/skills/left-1.png", "play sotre")}
            {this.skillBox("assets/skills/left-2.png", "App Store")}
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            {this.skillBox("assets/skills/mid-1.png", "Node.JS")}
            {this.skillBox("assets/skills/mid-2.png", "Javascript")}
            {this.skillBox("assets/skills/mid-3.png", "React")}
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            {this.skillBox("assets/skills/right-1.png", "html")}
            {this.skillBox("assets/skills/right-2.png", "css")}
          </div>
          <div className="d-none d-sm-none d-md-flex justify-content-center align-self-center">
            {this.skillBox("assets/skills/righter-1.png", "Adobe Apps")}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
