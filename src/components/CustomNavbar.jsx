import React from "react";

function CustomNavbar({ data }) {
  const mainLinks = data.mainLinks;
  return (
    <div className="navbar-bg d-flex">
      <div className="container">
        <nav className="navbar navbar-expand navbar-dark d-flex justify-content-between">
          <a href="/" className="navbar-brand">
            <img src="/assets/pyLogo-02.png" alt="pyLogo" />
          </a>
          <ul id="navbar-main" className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href={mainLinks[0].href}>
                {mainLinks[0].title}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={mainLinks[1].href}>
                {mainLinks[1].title}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={mainLinks[2].href}>
                {mainLinks[2].title}
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
            <img src="/assets/language-icon.png" alt="language" />
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <a className="dropdown-item" href="#">
              English
            </a>
            <a className="dropdown-item" href="#">
              中　文
            </a>
            <a className="dropdown-item" href="#">
              日本語
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default CustomNavbar;
