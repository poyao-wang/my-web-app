import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";

function About({ data }) {
  const colsData = data.cols;
  const { t, i18n } = useTranslation();

  const col = (imagePath = null, tilteText = "colTitle", pText = "content") => {
    return (
      <div className="about-div-col d-flex flex-column justify-content-center align-items-center">
        <div className="about-div-img-wrapper d-flex justify-content-center align-items-center">
          <img className="about-div-img" src={imagePath} alt={tilteText} />
        </div>
        <h3>{tilteText}</h3>
        <p>{pText}</p>
      </div>
    );
  };

  return (
    <div fluid className="about-div main-divs" id="about-div">
      <div className="justify-content-center">
        <h2>{t("about.title")}</h2>
        <p className="h2-subtitle">{t("about.subtitle")}</p>
        <hr />
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center">
        {col(
          t("about.cols.0.imgSrc"),
          t("about.cols.0.titleText"),
          t("about.cols.0.contentText")
        )}
        {col(
          t("about.cols.1.imgSrc"),
          t("about.cols.1.titleText"),
          t("about.cols.1.contentText")
        )}
        {col(
          t("about.cols.2.imgSrc"),
          t("about.cols.2.titleText"),
          t("about.cols.2.contentText")
        )}
      </div>
    </div>
  );
}

export default About;
