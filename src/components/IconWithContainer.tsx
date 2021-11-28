import React, { RefObject } from "react";
import Icon from "./Icon";

interface IconWithContainerProps {
  iconContainerDivRef?: RefObject<HTMLDivElement>;
  iconSrc: string;
  bgUrl?: string;
  type: "skill" | "project" | "contact";
  text?: string;
}

const IconWithContainer: React.FC<IconWithContainerProps> = ({
  iconContainerDivRef,
  iconSrc,
  type,
  bgUrl = "",
  text = "",
}) => {
  const className: string = "icon-with-container icon-with-container--" + type;
  return (
    <div
      ref={iconContainerDivRef}
      className={className}
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <Icon src={iconSrc} type={type} />
      {text && <p>{text}</p>}
    </div>
  );
};

export default IconWithContainer;
