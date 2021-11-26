import React from "react";
import NavBar from "./NavBar";
import SectionHero from "./SectionHero";
import SectionAbout from "./SectionAbout";
import SectionSkills from "./SectionSkills";
import SectionProjects from "./SectionProjects";
import SectionContact from "./SectionContact";

const PageHome: React.FC = () => {
  return (
    <div id="main-container">
      <NavBar />
      <SectionHero />
      <SectionAbout />
      <SectionSkills />
      <SectionProjects />
      <SectionContact />
    </div>
  );
};

export default PageHome;
