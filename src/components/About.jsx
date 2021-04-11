import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./About.css";
class About extends Component {
  state = {};

  col(imagePath = null, tilteText = "colTitle", pText = "content") {
    let newText = pText.split("\n").map((item, i) => <p key={i}>{item}</p>);
    return (
      <div className="about-div-col d-flex flex-column justify-content-center align-items-center">
        <div className="about-div-img-wrapper d-flex justify-content-center align-items-center">
          <Image className="about-div-img" src={imagePath} alt="Poyao Wang" />
        </div>
        <h3 className="text-md">{tilteText}</h3>
        <p className="text-md">{pText}</p>
      </div>
    );
  }

  render() {
    return (
      <Container fluid className="about-div main-divs" id="about-div">
        <Row className="justify-content-center">
          <Col xs={10} sm={8}>
            <h2>About Me</h2>
            <p className="lead">A Self-taught Full-Stack Developer</p>
            <hr className="profile-hr"></hr>
          </Col>
        </Row>
        <div className="d-flex flex-column flex-sm-row justify-content-center">
          {this.col(
            "assets/about-div-img1.png",
            "Front-end",
            `ReactJS Web App / Mobile App\nHTML / CSS / JavaScript\nAdobe Ps / Ai / Xd`
          )}
          {this.col(
            "assets/about-div-img2.png",
            "Back-end",
            `RESTful API development\nCloud sever deployment\nNodeJS, mongoDB`
          )}
          {this.col(
            "assets/about-div-img3.png",
            "Languages",
            `English / Chinese / Japanese\nBusiness level language skills\nMulti-language UI`
          )}
        </div>
      </Container>
    );
  }
}

export default About;
