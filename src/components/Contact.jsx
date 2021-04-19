import React from "react";

import "./Contact.css";

function Contact({ data }) {
  const contactIcons = data.contactIcons;

  function contactIcon(contact, key) {
    return (
      <a
        key={key}
        href={contact.href}
        target="blank_"
        className="contact-btn d-flex flex-column align-items-center justify-content-center"
      >
        <img className="contact-icon" src={contact.iconSrc} />
        <span className="contact-text">{contact.text}</span>
      </a>
    );
  }
  return (
    <div
      id="contact-div"
      className="contact-div main-divs d-flex flex-column align-items-center"
    >
      <h2>{data.title}</h2>
      <p className="h2-subtitle">{data.subtitle}</p>
      <hr />
      <div className="d-flex flex-row justify-content-center align-items-center">
        {contactIcons.map((project, key) => contactIcon(project, key))}
      </div>
    </div>
  );
}

export default Contact;
