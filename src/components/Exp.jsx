import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Link45Icon from "./icons/Link45Icon";
import "./Exp.css";
class Exp extends Component {
  state = {
    educations: [
      {
        inst: "Osaka University",
        subInst: "School of Engineering",
        hrefText: "https://www.eng.osaka-u.ac.jp/en",
        jobTitle: "Sphecial Researcher",
        time: "2010-2011",
        cont:
          "Takeishi and Komiyama's Laboratory. FrontierLab Program Fall 2010. " +
          "Gas turbine film cooling research.",
      },
      {
        inst: "National Tsing Hua University",
        subInst: "School of Engineering",
        hrefText: "http://pme.site.nthu.edu.tw/index.php?Lang=en",
        jobTitle: "Power of Mechanical Engineering",
        time: "2006-2011",
        cont: "Bachelor's degree. Thermo-Fluids Engineering Division",
      },
    ],
    careers: [
      {
        inst: "Chassis Brake International",
        subInst: "CBI Japan",
        hrefText: "https://www.chassisbrakes.com/country/japan/",
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
        hrefText: false,
        jobTitle: "Backpacker",
        time: "Jan 2018 - May 2019",
        cont:
          "Experiencing Australian culture and lifestyle. " +
          "Kitchen hand of Sushi Train (sushi restaurant). " +
          "Production line worker in Australian Country Choice (meat factory).",
      },
      {
        inst: "Daimler AG",
        subInst: "Mitsubishi Fuso",
        hrefText: "https://www.mitsubishi-fuso.com",
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
        hrefText: false,
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
          <Col xs={11} sm={10} md={9}>
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
          <Col xs={11} sm={10} md={9} lg={9}>
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
        <Col
          className="exp-table-col exp-table-col-l"
          xs={11}
          sm={10}
          md={9}
          lg={4}
        >
          <h4>{rowCont.inst}</h4>
          <p>
            {rowCont.time}
            <br />
            <a
              className="exp-table-link"
              href={rowCont.hrefText}
              target="_blank"
            >
              <Link45Icon />
              <span> </span>
              {rowCont.subInst}
            </a>
          </p>
        </Col>
        <Col
          className="exp-table-col exp-table-col-r"
          xs={11}
          sm={10}
          md={9}
          lg={5}
        >
          <h5>{rowCont.jobTitle}</h5>
          <p>
            {rowCont.cont}
            <br />
          </p>
        </Col>
      </Row>
    );
  }
}

export default Exp;
