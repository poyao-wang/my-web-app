import React from 'react';
import { AnimeName } from './IconAnime';
import IconWithContainer from './IconWithContainer';

interface ItemAboutProps {
  iconAnimeName: AnimeName;
  iconSrc: string;
  textH: string;
  textP: string;
}

const ItemAbout: React.FC<ItemAboutProps> = ({
  iconAnimeName,
  iconSrc,
  textH,
  textP,
}) => {
  const className = 'item-about';
  return (
    <div className={className}>
      <IconWithContainer
        iconSrc={iconSrc}
        type="about"
        iconAnimeName={iconAnimeName}
      />
      <h3>{textH}</h3>
      <p className="p-h3">{textP}</p>
    </div>
  );
};

export default ItemAbout;
