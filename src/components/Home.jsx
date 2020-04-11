import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
import Profile from "./Profile";
import Exp from "./Exp";
import Abilities from "./Abilities";

class Home extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h2>Poyao Wang</h2>
          <p>This is the website of Boyo.</p>
          <Link to="About">
            <Button className="primary">About</Button>
          </Link>
        </Jumbotron>
        <Profile />
        <Exp />
        <Abilities />
        {/* <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/me1.jpeg"
              roundedCircle
              className="profile-pic"
            />
            <h3>Japan</h3>
            <p>Where I work currently.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/me2.jpeg"
              roundedCircle
              className="profile-pic"
            />
            <h3>Taiwan</h3>
            <p>Where I come from.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/me3.jpeg"
              roundedCircle
              className="profile-pic"
            />
            <h3>Australia</h3>
            <p>Working holiday for 1 year.</p>
          </Col>
        </Row>{" "} */}
      </Container>
    );
  }
}

export default Home;
