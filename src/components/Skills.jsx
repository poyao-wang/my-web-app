import React from "react";
import { useTranslation } from "react-i18next";

import "./Skills.css";

function Skills({ data }) {
  const skillsData = data.skillsData;
  const skillBox = (imagePath = null, title = "title") => {
    return (
      <div className="skill-box justify-content-center align-self-center">
        <img className="skill-img" src={imagePath} alt={title} />
        <p>{title.toUpperCase()}</p>
      </div>
    );
  };
  const { t, i18n } = useTranslation();

  return (
    <div fluid className="skills-div main-divs" id="skills-div">
      <div className="justify-content-center">
        <h2>{t("skills.title")}</h2>
        <p className="h2-subtitle">{t("skills.subtitle")}</p>
        <hr />
      </div>
      <div className="d-flex flex-row justify-content-center">
        <div className="d-none d-sm-none d-md-flex justify-content-center align-self-center">
          {skillBox(skillsData.lefter.imgSrc, skillsData.lefter.title)}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {skillBox(skillsData.left1.imgSrc, skillsData.left1.title)}
          {skillBox(skillsData.left2.imgSrc, skillsData.left2.title)}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {skillBox(skillsData.mid1.imgSrc, skillsData.mid1.title)}
          {skillBox(skillsData.mid2.imgSrc, skillsData.mid2.title)}
          {skillBox(skillsData.mid3.imgSrc, skillsData.mid3.title)}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {skillBox(skillsData.right1.imgSrc, skillsData.right1.title)}
          {skillBox(skillsData.right2.imgSrc, skillsData.right2.title)}
        </div>
        <div className="d-none d-sm-none d-md-flex justify-content-center align-self-center">
          {skillBox(skillsData.righter.imgSrc, skillsData.righter.title)}
        </div>
      </div>
    </div>
  );
}

export default Skills;
