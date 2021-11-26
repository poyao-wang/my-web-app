import React from "react";
import IconWithContainer from "./IconWithContainer";
import Button from "./Button";

interface ItemProjectProps {
  iconSrc: string;
  iconBgUrl: string;
  textH: string;
  textP: string;
  textBtn: string;
  hrefBtn: string;
}

const ItemProject: React.FC<ItemProjectProps> = ({
  iconSrc,
  iconBgUrl,
  textH,
  textP,
  textBtn,
  hrefBtn,
}) => {
  return (
    <div className="item-project">
      <IconWithContainer iconSrc={iconSrc} bgUrl={iconBgUrl} type="project" />
      <div className="item-project__content">
        <h3>{textH}</h3>
        <p className="p-h3">{textP}</p>
        <Button href={hrefBtn} text={textBtn} type="secondary" />
      </div>
    </div>
  );
};

export default ItemProject;
