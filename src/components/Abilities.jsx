import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Abilities.css";

class Abilities extends Component {
  state = {
    skills: [
      { name: "JavaScript", rate: 4 },
      { name: "ReactJS", rate: 3 },
      { name: "Python", rate: 3 },
      { name: "Bootstrap", rate: 3 },
      { name: "HTML", rate: 3 },
      { name: "CSS", rate: 3 },
    ],
  };
  render() {
    return (
      <Container fluid className="abi-div">
        <Row className="abi-title justify-content-center">
          <Col xs={10} sm={8}>
            <h2>Abilities</h2>
            <p class="lead">Learned most of these my myself.</p>
            <hr className="abi-hr"></hr>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Abilities;
