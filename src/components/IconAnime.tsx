import React from 'react';
import lottie from 'lottie-web';

export type AnimeName = 'about_front-end' | 'about_back-end' | 'about_language';

type LoaderProps = {
  animeName: AnimeName;
  size?: number;
};

const loadAnimationData = (AnimeName: AnimeName) => {
  switch (AnimeName) {
    case 'about_back-end':
      return require('../assets/animations/about_back-end.json');
    case 'about_front-end':
      return require('../assets/animations/about_front-end.json');
    case 'about_language':
      return require('../assets/animations/about_language.json');
  }
};

const IconAnime: React.FC<LoaderProps> = ({ animeName }) => {
  const animationData = loadAnimationData(animeName);
  const elementId = 'anime-' + animeName;

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#' + elementId) as Element,
      animationData,
      renderer: 'svg', // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div id={elementId} className="icon icon--about"></div>;
};

export default IconAnime;
