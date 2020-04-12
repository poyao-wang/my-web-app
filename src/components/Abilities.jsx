import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import StarFill from "./icons/StarFill";
import Star from "./icons/Star";
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
      { name: "VBA", rate: 3 },
      { name: "node.js", rate: 3 },
      { name: "Cmd lines", rate: 2 },
      { name: "Google Cloud", rate: 2 },
    ],
    languages: [
      { name: "Chinese", rate: 5 },
      { name: "English", rate: 4 },
      { name: "Japanese", rate: 4 },
      { name: "German", rate: 1 },
    ],
    tools: [
      { name: "MS Office", rate: 5 },
      { name: "Mac", rate: 5 },
      { name: "Windows", rate: 5 },
      { name: "MS VSCode", rate: 3 },
      { name: "Adobe Ai", rate: 3 },
      { name: "Adobe Ps", rate: 3 },
      { name: "Fusion 360", rate: 3 },
      { name: "Google Drive", rate: 3 },
      { name: "Raspberry Pi", rate: 3 },
      { name: "Git / Github", rate: 2 },
    ],
  };
  render() {
    return (
      <Container fluid className="abi-div main-divs">
        <Row className="abi-title justify-content-center">
          <Col xs={8} sm={7} md={9} lg={9}>
            <h2>Abilities</h2>
            <p className="lead">Learned most of these my myself.</p>
          </Col>
        </Row>
        {skillTable("Skills", this.state.skills)}
        {skillTable("Languages", this.state.languages)}
        {skillTable("Tools", this.state.tools)}
      </Container>
    );
  }
}

function skillTable(h3TitleText, skills) {
  const amt = Math.ceil(skills.length / 2);
  const upperHalf = skills.slice(0, amt);
  const lowerHalf = skills.slice(amt);
  const xs = 8;
  const sm = 7;
  const mdHalf = 4;
  const md = mdHalf * 2 + 1;
  const lgHalf = 4;
  const lg = lgHalf * 2 + 1;
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={xs} sm={sm} md={md} lg={lg}>
          <hr className="abi-hr"></hr>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={xs} sm={sm} md={md} lg={lg}>
          <h3 className="skill-table-h3 text-md-left">{h3TitleText}</h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={xs} sm={sm} md={mdHalf} lg={lgHalf}>
          {upperHalf.map((skill, key) =>
            skillAndRate(skill.name, skill.rate, key)
          )}
        </Col>
        <Col className="d-none d-md-block" md={1} />
        <Col xs={xs} sm={sm} md={mdHalf} lg={lgHalf}>
          {lowerHalf.map((skill, key) =>
            skillAndRate(skill.name, skill.rate, key)
          )}
        </Col>
      </Row>
    </Container>
  );
}

function skillAndRate(name, rate, key) {
  const amtStarFill = rate;
  const amtStar = 5 - rate;
  return (
    <Row key={key}>
      <Col className="skill-name-col">{name}</Col>
      <Col className="star-col">
        {[...Array(amtStarFill)].map((e, key) => (
          <StarFill key={key} />
        ))}
        {[...Array(amtStar)].map((e, key) => (
          <Star key={key} />
        ))}
      </Col>
    </Row>
  );
}

export default Abilities;
