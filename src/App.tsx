import React from 'react';
import DropDown from './components/DropDown';

const dummyItems = [
  //
  { text: 'English', href: '#' },
  { text: '中　文', href: '#' },
  { text: '日本語', href: '#' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <div id="main-container">
        <DropDown items={dummyItems} />
      </div>
    </div>
  );
};

export default App;
