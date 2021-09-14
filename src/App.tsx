import React from 'react';
import NavBar from './components/NavBar';
import SectionHero from './components/SectionHero';

const App: React.FC = () => {
  return (
    <div className="App">
      <div id="main-container">
        <NavBar />
        <SectionHero />
      </div>
    </div>
  );
};

export default App;
