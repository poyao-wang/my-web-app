import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Contact.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <Container fluid className="contact-div main-divs">
        <Row className="contact-title justify-content-center">
          <Col xs={11} sm={10} md={8}>
            <h2>Projects</h2>
            <p className="lead">Feel free to browse my work results.</p>
            <hr className="contact-hr"></hr>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
