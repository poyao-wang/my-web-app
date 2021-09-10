import React from 'react';
import Icon from './components/Icon';

const App: React.FC = () => {
  return (
    <div className="App">
      <Icon src={'assets/about-div-img1.png'} type={'about'} />
      <Icon src={'assets/contact-github-icon.png'} type={'contact'} />
      <Icon src={'assets/navbar-brand-logo.png'} type={'logo'} />
      <Icon src={'assets/project1.png'} type={'project'} />
      <Icon src={'assets/skills/right-1.png'} type={'skill'} />
      <Icon src={'/assets/navbar-language-icon.png'} type={'translate'} />
    </div>
  );
};

export default App;
