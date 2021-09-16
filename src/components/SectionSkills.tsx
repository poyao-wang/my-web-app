import React from 'react';
import { useTranslation } from 'react-i18next';

import * as TypeMainData from '../mainData.model';
import IconWithContainer from './IconWithContainer';

const SectionSkills: React.FC = () => {
  const { t } = useTranslation();

  const sectionSkills: TypeMainData.SectionSkills = t('sectionSkills', {
    returnObjects: true,
  });

  return (
    <section className="section-skills">
      <h2>{sectionSkills.title}</h2>
      <p className="p-h2">{sectionSkills.subtitle}</p>
      <div className="skill-items">
        <div className="skill-items__col mobile-hide">
          {
            <IconWithContainer
              type={'skill'}
              iconSrc={sectionSkills.skillItems.lefter.imgSrc}
              text={sectionSkills.skillItems.lefter.title}
            />
          }
        </div>
        <div className="skill-items__col">
          {
            <IconWithContainer
              type={'skill'}
              iconSrc={sectionSkills.skillItems.left1.imgSrc}
              text={sectionSkills.skillItems.left1.title}
            />
          }
          {
            <IconWithContainer
              type={'skill'}
              iconSrc={sectionSkills.skillItems.left2.imgSrc}
              text={sectionSkills.skillItems.left2.title}
            />
          }
        </div>
        <div className="skill-items__col">
          {
            <IconWithContainer
              type={'skill'}
              iconSrc={sectionSkills.skillItems.mid1.imgSrc}
              text={sectionSkills.skillItems.mid1.title}
            />
          }
          {
            <IconWithContainer
              type={'skill'}
              iconSrc={sectionSkills.skillItems.mid2.imgSrc}
              text={sectionSkills.skillItems.mid2.title}
            />
          }
          {
            <IconWithContainer
              type={'skill'}
              iconSrc={sectionSkills.skillItems.mid3.imgSrc}
              text={sectionSkills.skillItems.mid3.title}
            />
          }
        </div>
        <div className="skill-items__col">
          {
            <IconWithContainer
              type={'skill'}
              iconSrc={sectionSkills.skillItems.right1.imgSrc}
              text={sectionSkills.skillItems.right1.title}
            />
          }
          {
            <IconWithContainer
              type={'skill'}
              iconSrc={sectionSkills.skillItems.right2.imgSrc}
              text={sectionSkills.skillItems.right2.title}
            />
          }
        </div>
        <div className="skill-items__col mobile-hide">
          {
            <IconWithContainer
              type={'skill'}
              iconSrc={sectionSkills.skillItems.righter.imgSrc}
              text={sectionSkills.skillItems.righter.title}
            />
          }
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;
