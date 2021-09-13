import React from 'react';
import ItemProject from './components/ItemProject';

const App: React.FC = () => {
  const textP = `A simple workout timer \n iOS / Android app`;
  return (
    <div className="App">
      <ItemProject
        iconSrc="assets/project1.png"
        iconBgUrl="/assets/proj-card-img-container.png"
        textH="TabaTimer"
        textP={textP}
        textBtn="Learn More"
        hrefBtn="https://www.google.com/"
      />
      <ItemProject
        iconSrc="assets/project1.png"
        iconBgUrl="/assets/proj-card-img-container.png"
        textH="TabaTimer"
        textP={textP}
        textBtn="Learn More"
        hrefBtn="https://www.google.com/"
      />
      <ItemProject
        iconSrc="assets/project1.png"
        iconBgUrl="/assets/proj-card-img-container.png"
        textH="TabaTimer"
        textP={textP}
        textBtn="Learn More"
        hrefBtn="https://www.google.com/"
      />
    </div>
  );
};

export default App;
