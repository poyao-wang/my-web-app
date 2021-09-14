import React from 'react';
import IconWithContainer from './IconWithContainer';

const dummySkillIcon = (
  <IconWithContainer
    iconSrc={'assets/skills/right-1.png'}
    type={'skill'}
    text="HTML"
  />
);

const SectionSkills: React.FC = () => {
  return (
    <div className="section-skills">
      <h2>About Me</h2>
      <p className="p-h2">A Self-taught Full-Stack Developer</p>
      <div className="skill-items">
        <div className="skill-items__col mobile-hide">{dummySkillIcon}</div>
        <div className="skill-items__col">
          {dummySkillIcon}
          {dummySkillIcon}
        </div>
        <div className="skill-items__col">
          {dummySkillIcon}
          {dummySkillIcon}
          {dummySkillIcon}
        </div>
        <div className="skill-items__col">
          {dummySkillIcon}
          {dummySkillIcon}
        </div>
        <div className="skill-items__col mobile-hide">{dummySkillIcon}</div>
      </div>
    </div>
  );
};

export default SectionSkills;
