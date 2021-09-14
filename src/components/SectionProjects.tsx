import React from 'react';
import ItemProject from './ItemProject';

const textP = `A simple workout timer \n iOS / Android app`;

const dummyProjectItem = (
  <ItemProject
    iconSrc="assets/project1.png"
    iconBgUrl="/assets/proj-card-img-container.png"
    textH="TabaTimer"
    textP={textP}
    textBtn="Learn More"
    hrefBtn="https://www.google.com/"
  />
);

const SectionProjects: React.FC = () => {
  return (
    <div className="section-projects">
      <h2>My Works</h2>
      <p className="p-h2">A Self-taught Full-Stack Developer</p>
      <div className="project-items">
        {dummyProjectItem}
        {dummyProjectItem}
        {dummyProjectItem}
      </div>
    </div>
  );
};

export default SectionProjects;
