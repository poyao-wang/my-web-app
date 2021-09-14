import React from 'react';
import NavItems from './components/NavItems';

const dummyItems = [
  //
  { text: 'Skills', href: '#' },
  { text: 'Works', href: '#' },
  { text: 'Contact', href: '#' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <div id="main-container">
        <NavItems items={dummyItems} />
      </div>
    </div>
  );
};

export default App;
