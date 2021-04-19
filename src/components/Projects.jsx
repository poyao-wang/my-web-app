import React from "react";
import { useTranslation } from "react-i18next";

import ProjCard from "./icons/Card";
import "./Projects.css";

function Projects({ data }) {
  const cards = data.cards;
  const { t, i18n } = useTranslation();

  const cardWithContent = (key) => {
    return (
      <ProjCard
        key={key}
        imgSrc={t("projects.cards." + key + ".imgSrc")}
        imgOnLeft={t("projects.cards." + key + ".imgOnLeft")}
        cardTitleText={t("projects.cards." + key + ".cardTitleText")}
        cardText={t("projects.cards." + key + ".cardText")}
        btnLink={t("projects.cards." + key + ".btnLink")}
        btnText={t("projects.cards." + key + ".btnText")}
      />
    );
  };

  return (
    <div fluid className="proj-div main-divs" id="proj-div">
      <div className="proj-title justify-content-center">
        <h2>{t("projects.title")}</h2>
        <p className="h2-subtitle">{t("projects.subtitle")}</p>
        <hr />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {cardWithContent(0)}
        {cardWithContent(1)}
        {cardWithContent(2)}
      </div>
    </div>
  );
}

export default Projects;
