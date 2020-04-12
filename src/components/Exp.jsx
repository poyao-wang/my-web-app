import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Exp.css";
class Exp extends Component {
  state = {
    educations: [
      {
        inst: "Osaka University",
        subInst: "School of Engineering",
        jobTitle: "Sphecial Researcher",
        time: "2010-2011",
        cont:
          "Takeishi and Komiyama's Laboratory. FrontierLab Program Fall 2010. " +
          "Gas turbine film cooling research.",
      },
      {
        inst: "National Tsing Hua University",
        subInst: "School of Engineering",
        jobTitle: "Power of Mechanical Engineering",
        time: "2006-2011",
        cont: "Bachelor's degree. Thermo-Fluids Engineering Division",
      },
    ],
    careers: [
      {
        inst: "Chassis Brake International",
        subInst: "CBI Japan",
        jobTitle: "Test Engineer",
        time: "Jul 2019 - Present",
        cont:
          "Responsible for brake units testing. " +
          "Brake performance test, functional tests. " +
          "Test data analysis, summarising, material making. ",
      },
      {
        inst: "Working Holiday in Australia",
        subInst: "Food and Meat Industry",
        jobTitle: "Backpacker",
        time: "Jan 2018 - May 2019",
        cont:
          "Experiencing Australian culture and lifestyle. " +
          "Kitchen hand of Sushi Train (sushi restaurant). " +
          "Production line worker in Australian Country Choice (meat factory).",
      },
      {
        inst: "Daimler AG",
        subInst: "Mitsubishi Fuso Truck and Bus Corporation",
        jobTitle: "Test Engineer",
        time: "Apr 2013 - Sep 2016",
        cont:
          "Responsible for heavy duty diesel engine dyno testing. " +
          "Engine performance test, emission test , functional test, and durability test. " +
          "Test data analysis, summarising, material making. " +
          "Test planning, execution. ",
      },
      {
        inst: "Taiwan (R.O.C) Army",
        subInst: "52th Engineering Group",
        jobTitle: "Private First Class",
        time: "Nov 2011 - Oct 2012",
        cont:
          "Military service of ROC citizens. " +
          "Accomplished the daily commands and routines.",
      },
    ],
  };
  render() {
    return (
      <Container fluid className="exp-div main-divs">
        <Row className="exp-title justify-content-center">
          <Col xs={11} sm={10} md={8}>
            <h2>Experiences</h2>
            <p className="lead">Working and living in multiple countries.</p>
          </Col>
        </Row>
        {this.expTable("Careers", this.state.careers)}
        {this.expTable("Education", this.state.educations)}
      </Container>
    );
  }

  expTable(titleText, rows) {
    return (
      <div>
        <Row className="justify-content-center">
          <Col xs={11} sm={10} md={8}>
            <hr className="exp-hr"></hr>
            <h3>{titleText}</h3>
          </Col>
        </Row>
        {rows.map((education, key) => this.expTableRow(education, key))}
      </div>
    );
  }

  expTableRow(rowCont, key) {
    return (
      <Row className="justify-content-center" key={key}>
        <Col className="exp-table-col" xs={11} sm={10} md={3}>
          <h5>{rowCont.inst}</h5>
          <p>
            {rowCont.subInst}
            <br />
            {rowCont.time}
          </p>
        </Col>
        <Col className="exp-table-col" xs={11} sm={10} md={5}>
          <h5>{rowCont.jobTitle}</h5>
          <p>{rowCont.cont}</p>
        </Col>
      </Row>
    );
  }
}

export default Exp;
