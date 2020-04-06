import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Welcome to my page!</h2>
          <p>This is the website of Boyo.</p>
          <Link to="About">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
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
        </Row>{" "}
      </Container>
    );
  }
}

export default Home;
