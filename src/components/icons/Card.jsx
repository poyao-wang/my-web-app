import React, { Component } from "react";
import { Col } from "react-bootstrap";

import "./Card.css";

function ProjCard({
  imgSrc,
  imgOnLeft,
  cardTitleText,
  cardText,
  btnLink,
  btnText,
}) {
  const projCardRowFlex = imgOnLeft ? "flex-sm-row" : "flex-sm-row-reverse";
  return (
    <div className={"proj-card d-flex flex-column " + projCardRowFlex}>
      <div className="proj-card-img-container">
        <img className="proj-card-img" src={imgSrc} alt="Card image cap" />
      </div>
      <div className="proj-card-body d-flex flex-column justify-content-center align-items-center ">
        <h3 className="proj-card-title">{cardTitleText}</h3>
        <p className="proj-card-text">{cardText}</p>
        <a href={btnLink} className="btn proj-card-btn" target="_blank">
          {btnText}
        </a>
      </div>
    </div>
  );
}

export default ProjCard;
