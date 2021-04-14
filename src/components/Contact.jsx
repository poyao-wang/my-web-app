import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  state = {
    contacts: [
      {
        text: "Linkedin",
        iconSrc: "assets/linkedin.png",
        href: "https://www.linkedin.com/in/poyao-wang-33860058/",
      },
      {
        text: "GitHub",
        iconSrc: "assets/github.png",
        href: "https://github.com/poyao-wang",
      },
      {
        text: "E-mail",
        iconSrc: "assets/email.png",
        href: "mailto:poyaowang.taiwan@gmail.com",
      },
    ],
  };
  render() {
    return (
      <div
        id="contact-div"
        className="contact-div main-divs d-flex flex-column align-items-center"
      >
        <h2>Contact</h2>
        <p className="h2-subtitle">
          Interested in my work?
          <br />
          Feel free to contact me.
        </p>
        <hr />
        <div className="d-flex flex-row justify-content-center align-items-center">
          {this.state.contacts.map((project, key) =>
            this.contactRow(project, key)
          )}
        </div>
      </div>
    );
  }

  contactRow(contact, key) {
    return (
      <a
        href={contact.href}
        target="blank_"
        className="contact-btn d-flex flex-column align-items-center justify-content-center"
      >
        <img className="contact-icon" src={contact.iconSrc} />
        <span className="contact-text">{contact.text}</span>
      </a>
    );
  }
}

export default Contact;
