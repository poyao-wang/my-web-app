import React, { Component } from "react";
import ProjCard from "./icons/Card";
import "./Projects.css";

function Projects({ data }) {
  const cards = data.cards;

  const cardWithContent = (card, key) => {
    return (
      <ProjCard
        key={key}
        imgSrc={card.imgSrc}
        imgOnLeft={card.imgOnLeft}
        cardTitleText={card.cardTitleText}
        cardText={card.cardText}
        btnLink={card.btnLink}
        btnText={card.btnText}
      />
    );
  };
  return (
    <div fluid className="proj-div main-divs" id="proj-div">
      <div className="proj-title justify-content-center">
        <h2>{data.title}</h2>
        <p className="h2-subtitle">{data.subtitle}</p>
        <hr />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {cards.map((project, key) => cardWithContent(project, key))}
      </div>
    </div>
  );
}

export default Projects;
