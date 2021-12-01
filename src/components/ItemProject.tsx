import React from "react";

import Button from "./Button";
import IconWithContainerAnime from "./IconWithContainerAnime";

interface ItemProjectProps {
  reversed?: boolean;
  index: number;
  iconSrc: string;
  iconBgUrl?: string;
  textH: string;
  textP: string;
  textBtn: string;
  hrefBtn: string;
}

const ItemProject: React.FC<ItemProjectProps> = ({
  reversed,
  index,
  iconSrc,
  iconBgUrl,
  textH,
  textP,
  textBtn,
  hrefBtn,
}) => {
  const mainDivClassName = reversed
    ? "item-project item-project--reverse"
    : "item-project";

  return (
    <div className={mainDivClassName} id={"item-project-" + index}>
      <IconWithContainerAnime
        animeDivId={"project-anime-" + index}
        bgUrl={iconBgUrl}
        type="project"
      />
      <div className="item-project__content">
        <h3>{textH}</h3>
        <p className="p-h3">{textP}</p>
        <Button href={hrefBtn} text={textBtn} type="secondary" />
      </div>
    </div>
  );
};

export default ItemProject;
