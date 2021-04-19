import React from "react";
import { useTranslation } from "react-i18next";

import "./Contact.css";

function Contact({ data }) {
  const contactIcons = data.contactIcons;
  const { t, i18n } = useTranslation();

  function contactIcon(key) {
    return (
      <a
        key={key}
        href={t("contacts.contactIcons." + key + ".href")}
        target="blank_"
        className="contact-btn d-flex flex-column align-items-center justify-content-center"
      >
        <img
          className="contact-icon"
          src={t("contacts.contactIcons." + key + ".iconSrc")}
        />
        <span className="contact-text">
          {t("contacts.contactIcons." + key + ".text")}
        </span>
      </a>
    );
  }
  return (
    <div
      id="contact-div"
      className="contact-div main-divs d-flex flex-column align-items-center"
    >
      <h2>{t("contacts.title")}</h2>
      <p className="h2-subtitle">{t("contacts.subtitle")}</p>
      <hr />
      <div className="d-flex flex-row justify-content-center align-items-center">
        {contactIcon(0)}
        {contactIcon(1)}
        {contactIcon(2)}
      </div>
    </div>
  );
}

export default Contact;
