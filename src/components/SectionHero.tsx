import React from 'react';

const SectionHero: React.FC = () => {
  return (
    <div
      className="section-hero"
      style={{ backgroundImage: 'url(assets/bg-top.png)' }}
    >
      <h1>Poyao Wang</h1>
      <p className="p-h1">Designer / Front-end / Back-end Developer</p>
    </div>
  );
};

export default SectionHero;
