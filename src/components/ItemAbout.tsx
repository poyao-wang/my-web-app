import React from "react";
import { AnimeName } from "../mainData.model";
import IconWithContainerAnime from "./IconWithContainerAnime";

interface ItemAboutProps {
  index: number;
  iconAnimeName: AnimeName;
  iconSrc: string;
  textH: string;
  textP: string;
}

const ItemAbout: React.FC<ItemAboutProps> = ({
  index,
  iconAnimeName,
  iconSrc,
  textH,
  textP,
}) => {
  const className = "item-about";
  return (
    <div className={className}>
      <IconWithContainerAnime
        type="about"
        animeDivId={"about-anime-" + index}
      />
      <h3>{textH}</h3>
      <p className="p-h3">{textP}</p>
    </div>
  );
};

export default ItemAbout;
