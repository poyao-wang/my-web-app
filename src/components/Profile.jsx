import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Profile.css";

class Profile extends Component {
  state = {};

  render() {
    const thisYear = new Date();
    const myAge = thisYear.getFullYear() - 1988;
    return (
      <Container fluid className="profile-div main-divs" id="profile-div">
        <Row className="justify-content-center">
          <Col xs={10} sm={8}>
            <h2>Profile</h2>
            <p className="lead">A Self-Taught Programmer.</p>
            <hr className="profile-hr"></hr>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10} sm={8} md={2}>
            <h3 className="text-md-left">About me</h3>
            <p className="text-md-left">
              I am a mechanical engineer. Working in automobile industry. I
              started stydying programming since 2019.
            </p>
          </Col>
          <Col xs={10} sm={8} md={3}>
            <Image
              roundedCircle
              className="profile-img"
              src="assets/me2.jpeg"
              alt="Poyao Wang"
            />
          </Col>
          <Col xs={10} sm={8} md={2}>
            <h3 className="text-md-left">Details</h3>
            <p className="text-md-left">
              <strong>Name:</strong>
              <br />
              Poyao Wang
              <br />
              <strong>Nickname:</strong>
              <br />
              Boyo
              <br />
              <strong>Age:</strong>
              <br />
              {myAge + " years"}
              <br />
              <strong>Location:</strong>
              <br />
              Tokyo, Japan
            </p>
          </Col>
        </Row>
        <Button variant="dark" className="linkedin-btn">
          <a
            className="linkedin-link"
            title="Follow PoyaoWang on LinkedIn"
            href="https://www.linkedin.com/in/poyao-wang-33860058/"
            target="_blank"
          >
            <Image className="linkedin-img" src="assets/LI-In-Bug_bg_w.png" />
            <span className="linkedin-text">Follow</span>
          </a>
        </Button>
      </Container>
    );
  }
}

export default Profile;
