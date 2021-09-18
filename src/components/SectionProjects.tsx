import React from 'react';
import { useTranslation } from 'react-i18next';

import * as TypeMainData from '../mainData.model';
import ItemProject from './ItemProject';

const SectionProjects: React.FC = () => {
  const { t } = useTranslation();

  const sectionProjects: TypeMainData.SectionProjects = t('sectionProjects', {
    returnObjects: true,
  });

  return (
    <section id="page-home__section-projects" className="section-projects">
      <h2>{sectionProjects.title}</h2>
      <p className="p-h2">{sectionProjects.subtitle}</p>
      <div className="project-items">
        {sectionProjects.projectItems.map((item, index) => (
          <ItemProject
            key={index}
            iconSrc={item.imgSrc}
            iconBgUrl="/assets/proj-card-img-container.png"
            textH={item.title}
            textP={item.text}
            textBtn={item.btnText}
            hrefBtn={item.btnLink}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionProjects;
