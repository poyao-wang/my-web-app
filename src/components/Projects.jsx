import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import ProjCard from "./icons/Card";
import "./Projects.css";

class Projects extends Component {
  state = {
    cards: [
      {
        imgSrc: "assets/Project1.jpg",
        cardTitleText: "This web app / ReactJS",
        cardText:
          "This webpage is built by reactJS, combined with " +
          "Bootstrap, and deployed on Google Cloud.",
        btnLink: "https://github.com/BoyoWang/my-web-app",
        btnText: "Github link",
      },
      {
        imgSrc: "assets/Project2.jpg",
        cardTitleText: "Raspberry Pi / Python",
        cardText:
          "A motor controller, built on Raspberry Pi, " +
          "coding in Python, using Tkinter as GUI.",
        btnLink: "https://github.com/BoyoWang/control-box",
        btnText: "Github link",
      },
    ],
  };
  render() {
    return (
      <Container fluid className="proj-div">
        <Row className="proj-title justify-content-center">
          <Col xs={11} sm={10} md={8}>
            <h2>Projects</h2>
            <p className="lead">Feel free to browse my work results. :)</p>
            <hr className="proj-hr"></hr>
          </Col>
        </Row>
        {this.cardTable("Haha", this.state.cards)}
      </Container>
    );
  }

  cardTable(h3TitleText, skills) {
    const amt = Math.ceil(skills.length / 2);
    const upperHalf = skills.slice(0, amt);
    const lowerHalf = skills.slice(amt);
    const xs = 8;
    const sm = 7;
    const md = 10;
    const lg = 8;
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={xs} sm={sm} md={md / 2} lg={lg / 2}>
            {upperHalf.map((project, key) =>
              this.cardWithContent(project, key)
            )}
          </Col>
          <Col xs={xs} sm={sm} md={md / 2} lg={lg / 2}>
            {lowerHalf.map((project, key) =>
              this.cardWithContent(project, key)
            )}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={xs} sm={sm} md={md} lg={lg}>
            <hr className="proj-hr"></hr>
          </Col>
        </Row>
      </Container>
    );
  }

  cardWithContent(card, key) {
    return (
      <ProjCard
        key={key}
        imgSrc={card.imgSrc}
        cardTitleText={card.cardTitleText}
        cardText={card.cardText}
        btnLink={card.btnLink}
        btnText={card.btnText}
      />
    );
  }
}

export default Projects;
