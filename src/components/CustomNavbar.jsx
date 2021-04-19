import React from "react";
import { useTranslation } from "react-i18next";

function CustomNavbar(props) {
  const { t, i18n } = useTranslation();

  return (
    <div className="navbar-bg d-flex">
      <div className="container">
        <nav className="navbar navbar-expand navbar-dark d-flex justify-content-between">
          <a href="/" className="navbar-brand">
            <img src="/assets/navbar-brand-logo.png" alt="pyLogo" />
          </a>
          <ul id="navbar-main" className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href={t("navbar.mainLinks.0.href")}>
                {t("navbar.mainLinks.0.title")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={t("navbar.mainLinks.1.href")}>
                {t("navbar.mainLinks.1.title")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={t("navbar.mainLinks.2.href")}>
                {t("navbar.mainLinks.2.title")}
              </a>
            </li>
          </ul>
          <a
            class="nav-link dropdown"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src="/assets/navbar-language-icon.png" alt="language" />
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <a
              className="dropdown-item"
              onClick={() => i18n.changeLanguage("en")}
            >
              English
            </a>
            <a
              className="dropdown-item"
              onClick={() => i18n.changeLanguage("zh")}
            >
              中　文
            </a>
            <a
              className="dropdown-item"
              onClick={() => i18n.changeLanguage("ja")}
            >
              日本語
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default CustomNavbar;
