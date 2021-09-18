import React from 'react';
import { useTranslation } from 'react-i18next';

import * as TypeMainData from '../mainData.model';
import ItemAbout from './ItemAbout';

const SectionAbout: React.FC = () => {
  const { t } = useTranslation();

  const sectionAbout: TypeMainData.SectionAbout = t('sectionAbout', {
    returnObjects: true,
  });

  return (
    <section id="page-home__section-about" className="section-about">
      <h2>{sectionAbout.title}</h2>
      <p className="p-h2">{sectionAbout.subtitle}</p>
      <div className="about-items">
        {sectionAbout.aboutItems.map((item, index) => (
          <ItemAbout
            key={index}
            iconSrc={item.imgSrc}
            textH={item.titleText}
            textP={item.contentText}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionAbout;
