import React from 'react';
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <Button href="https://www.google.com/" text="Learn More" type="black" />
      <Button href="https://www.google.com/" text="Learn More" type="primary" />
      <Button
        href="https://www.google.com/"
        text="Learn More"
        type="secondary"
      />
    </div>
  );
};

export default App;
