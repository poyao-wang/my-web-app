import React from 'react';
import IconWithContainer from './IconWithContainer';

const dummyContactItem = (
  <IconWithContainer
    iconSrc={'assets/contact-github-icon.png'}
    type={'contact'}
    text="GitHub"
  />
);
const SectionContact: React.FC = () => {
  return (
    <div
      className="section-contact"
      style={{ backgroundImage: 'url(assets/bg-bottom.png)' }}
    >
      <h2>Contact</h2>
      <p className="p-h2">
        Interested in my work? {'\n'}Feel free to contact me.
      </p>
      <div className="contact-items">
        {dummyContactItem}
        {dummyContactItem}
        {dummyContactItem}
      </div>
    </div>
  );
};

export default SectionContact;
