import React from 'react';

interface IconProps {
  src: string;
  type: 'about' | 'skill' | 'project' | 'contact' | 'translate' | 'logo';
}

const Icon: React.FC<IconProps> = (props) => {
  const className = 'icon icon--' + props.type;
  return (
    <div className={className}>
      <img src={props.src} alt="" />
    </div>
  );
};

export default Icon;
