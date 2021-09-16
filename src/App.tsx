import React, { Suspense } from 'react';
import NavBar from './components/NavBar';
import SectionAbout from './components/SectionAbout';
import SectionContact from './components/SectionContact';
import SectionHero from './components/SectionHero';
import SectionProjects from './components/SectionProjects';
import SectionSkills from './components/SectionSkills';

const App: React.FC = () => {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <div id="main-container">
          <NavBar />
          <SectionHero />
          <SectionAbout />
          <SectionSkills />
          <SectionProjects />
          <SectionContact />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
