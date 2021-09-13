import React from 'react';
import ItemAbout from './ItemAbout';

const textP = `RESTful API development\nCloud sever deployment\nNodeJS, mongoDB`;

const SectionAbout: React.FC = () => {
  return (
    <div className="section-about">
      <h2>About Me</h2>
      <p className="p-h2">A Self-taught Full-Stack Developer</p>
      <div className="about-items">
        <ItemAbout
          iconSrc="assets/about-div-img1.png"
          textH="Back-End"
          textP={textP}
        />
        <ItemAbout
          iconSrc="assets/about-div-img1.png"
          textH="Back-End"
          textP={textP}
        />
        <ItemAbout
          iconSrc="assets/about-div-img1.png"
          textH="Back-End"
          textP={textP}
        />
      </div>
    </div>
  );
};

export default SectionAbout;
