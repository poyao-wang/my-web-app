import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Experiences.css";
class Experiences extends Component {
  state = {
    educations: [
      {
        inst: "Osaka University",
        subInst: "School of Engineering",
        jobTitle: "Sphecial Researcher",
        time: "2010-2011",
        cont:
          "• Takeishi and Komiyama's Laboratory • FrontierLab Program Fall 2010",
      },
      {
        inst: "Tsing-Hua University",
        subInst: "School of Engineering",
        jobTitle: "Sphecial Researcher",
        time: "2010-2011",
        cont:
          "• Takeishi and Komiyama's Laboratory • FrontierLab Program Fall 2010",
      },
    ],
    careers: [
      {
        inst: "Chassis Brake International",
        subInst: "School of Engineering",
        jobTitle: "Sphecial Researcher",
        time: "2010-2011",
        cont:
          "• Takeishi and Komiyama's Laboratory • FrontierLab Program Fall 2010",
      },
      {
        inst: "Fuso",
        subInst: "School of Engineering",
        jobTitle: "Sphecial Researcher",
        time: "2010-2011",
        cont:
          "• Takeishi and Komiyama's Laboratory • FrontierLab Program Fall 2010",
      },
    ],
  };
  render() {
    return (
      <Container fluid className="exp-div">
        <Row className="exp-title justify-content-center">
          <Col xs={11} sm={10}>
            <h2>Experiences</h2>
            <p class="lead">Working and living in multiple countries.</p>
          </Col>
        </Row>
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={11} sm={10} md={8}>
              <hr className="exp-hr"></hr>
            </Col>{" "}
            <Col xs={11} sm={10} md={8}>
              <h3>Education</h3>
            </Col>
          </Row>
          {this.state.educations.map((education) => this.ExpTable(education))}
          <Row className="justify-content-center">
            <Col xs={11} sm={10} md={8}>
              <hr className="exp-hr"></hr>
            </Col>{" "}
            <Col xs={11} sm={10} md={8}>
              <h3>Careers</h3>
            </Col>
          </Row>
          {this.state.careers.map((career) => this.ExpTable(career))}
        </Container>
      </Container>
    );
  }

  ExpTable(education) {
    return (
      <Row className="justify-content-center">
        <Col xs={11} sm={10} md={3}>
          <h4>{education.inst}</h4>
          <p>
            {education.subInst}
            <br />
            {education.time}
          </p>
        </Col>
        <Col xs={11} sm={10} md={5}>
          <h5>{education.jobTitle}</h5>
          <p>{education.cont}</p>
        </Col>
      </Row>
    );
  }
}

export default Experiences;
