import React from 'react';
import ItemAbout from './components/ItemAbout';

const App: React.FC = () => {
  const textP = `RESTful API development\nCloud sever deployment\nNodeJS, mongoDB`;
  return (
    <div className="App">
      <ItemAbout
        iconSrc="assets/about-div-img1.png"
        textH="Back-End"
        textP={textP}
      />
    </div>
  );
};

export default App;
