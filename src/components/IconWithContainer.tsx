import React from 'react';
import Icon from './Icon';

interface IconWithContainerProps {
  iconSrc: string;
  bgUrl?: string;
  type: 'about' | 'skill' | 'project' | 'contact';
  text?: string;
}

const IconWithContainer: React.FC<IconWithContainerProps> = ({
  iconSrc,
  type,
  bgUrl = '',
  text = '',
}) => {
  const className: string = 'icon-with-container icon-with-container--' + type;
  return (
    <div className={className} style={{ backgroundImage: `url(${bgUrl})` }}>
      <Icon src={iconSrc} type={type} />
      {text && <p>{text}</p>}
    </div>
  );
};

export default IconWithContainer;
