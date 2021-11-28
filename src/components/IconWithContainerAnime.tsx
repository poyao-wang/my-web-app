import React from "react";
import { AnimeName } from "../mainData.model";

type AvailableSectionType = "about" | "project";

interface IconWithContainerAnimeProps {
  animeDivId: string;
  bgUrl?: string;
  type: AvailableSectionType;
  text?: string;
}

const IconWithContainerAnime: React.FC<IconWithContainerAnimeProps> = ({
  animeDivId,
  type,
  bgUrl = "",
  text = "",
}) => {
  const iconContainerDivclassName: string =
    "icon-with-container icon-with-container--" + type;

  return (
    <div
      className={iconContainerDivclassName}
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div id={animeDivId} className={"icon icon--" + type}></div>
      {text && <p>{text}</p>}
    </div>
  );
};

export default IconWithContainerAnime;
