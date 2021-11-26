import React, { RefObject } from "react";

import Icon from "./Icon";
import IconAnime, { AnimeName } from "./IconAnime";

interface IconWithContainerProps {
  animeRef?: RefObject<HTMLDivElement>;
  iconAnimeName?: AnimeName;
  iconSrc: string;
  bgUrl?: string;
  type: "about" | "skill" | "project" | "contact";
  text?: string;
}

const IconWithContainer: React.FC<IconWithContainerProps> = ({
  animeRef,
  iconAnimeName,
  iconSrc,
  type,
  bgUrl = "",
  text = "",
}) => {
  const className: string = "icon-with-container icon-with-container--" + type;

  const iconReturn = (iconAnimeName: AnimeName | undefined) => {
    if (!iconAnimeName) return <Icon src={iconSrc} type={type} />;
    return <IconAnime animeName={iconAnimeName} />;
  };

  return (
    <div
      className={className}
      style={{ backgroundImage: `url(${bgUrl})` }}
      ref={animeRef}
    >
      {iconReturn(iconAnimeName)}
      {text && <p>{text}</p>}
    </div>
  );
};

export default IconWithContainer;
