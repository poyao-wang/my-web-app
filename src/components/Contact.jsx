import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Contact.css";

class Contact extends Component {
  state = {
    contacts: [
      {
        text: "My Linkedin Page",
        iconSrc: "assets/LI-In-Bug_bg_w.png",
        href: "https://www.linkedin.com/in/poyao-wang-33860058/",
      },
      {
        text: "Send Me An Email",
        iconSrc: "assets/email-icon.png",
        href: "mailto:poyaowang.taiwan@gmail.com",
      },
    ],
  };
  render() {
    return (
      <Container fluid className="contact-div main-divs">
        <Row className="contact-title justify-content-center">
          <Col xs={11} sm={10} md={8}>
            <h2 className="contact-title-h2">Contact</h2>
            <p className="lead">
              Interested in my work?
              <br />
              Feel free to contact me.
            </p>
            <hr className="contact-hr"></hr>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={11} sm={10} md={8}>
            {this.contactTable(this.state.contacts)}
            <hr className="contact-hr"></hr>
          </Col>
        </Row>
      </Container>
    );
  }
  contactTable(contacts) {
    const amt = Math.ceil(contacts.length / 2);
    const upperHalf = contacts.slice(0, amt);
    const lowerHalf = contacts.slice(amt);
    const xs = 8;
    const sm = 7;
    const md = 10;
    const lg = 10;
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={xs} sm={sm} md={md / 2} lg={lg / 2}>
            {upperHalf.map((project, key) => this.contactRow(project, key))}
          </Col>
          <Col xs={xs} sm={sm} md={md / 2} lg={lg / 2}>
            {lowerHalf.map((project, key) => this.contactRow(project, key))}
          </Col>
        </Row>
      </Container>
    );
  }
  contactRow(contact, key) {
    return (
      <a href={contact.href} target="blank_" className="contact-btn">
        <Image className="contact-icon" src={contact.iconSrc} />
        <span className="contact-text">{contact.text}</span>
      </a>
    );
  }
}

export default Contact;
