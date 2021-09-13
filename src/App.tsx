import React from 'react';
import IconWithContainer from './components/IconWithContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <IconWithContainer iconSrc={'assets/about-div-img1.png'} type={'about'} />
      <IconWithContainer
        iconSrc={'assets/skills/right-1.png'}
        type={'skill'}
        text="HTML"
      />
      <IconWithContainer
        iconSrc={'assets/project1.png'}
        type={'project'}
        bgUrl="/assets/proj-card-img-container.png"
      />
      <IconWithContainer
        iconSrc={'assets/contact-github-icon.png'}
        type={'contact'}
        text="GitHub"
      />
    </div>
  );
};

export default App;
