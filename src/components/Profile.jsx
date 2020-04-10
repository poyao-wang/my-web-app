import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Profile.css";

class Profile extends Component {
  state = {};
  render() {
    return (
      <Container fluid className="profile-div">
        <Container>
          <h2>Profile</h2>
          <p class="lead">A Self-Taught Programmer.</p>
          <hr className="profile-hr"></hr>
          <Row className="justify-content-center">
            <Col xs={12} sm={2}>
              <h3 className="text-sm-left">About me</h3>
              <p className="text-sm-left">
                I am a mechanical engineer. Working in automobile industry. I
                started stydying programming since 2019.
              </p>
            </Col>
            <Col xs={12} sm={4}>
              <Image
                roundedCircle
                className="profile-img"
                src="assets/me2.jpeg"
                alt="Poyao Wang"
              />
            </Col>
            <Col xs={12} sm={2}>
              <h3 className="text-sm-left">Details</h3>
              <p className="text-sm-left">
                <strong>Name:</strong>
                <br />
                Poyao Wang
                <br />
                <strong>Age:</strong>
                <br />
                32 years
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
      </Container>
    );
  }
}

export default Profile;
