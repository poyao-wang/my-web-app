import React from 'react';
import IconWithContainer from './IconWithContainer';

interface ItemAboutProps {
  iconSrc: string;
  textH: string;
  textP: string;
}

const ItemAbout: React.FC<ItemAboutProps> = ({ iconSrc, textH, textP }) => {
  const className = 'item-about';
  return (
    <div className={className}>
      <IconWithContainer iconSrc={iconSrc} type="about" />
      <h3>{textH}</h3>
      <p className="p-h3">{textP}</p>
    </div>
  );
};

export default ItemAbout;
