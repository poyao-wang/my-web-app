import React, { Component } from "react";
import "./About.css";

function About({ data }) {
  const colsData = data.cols;

  const col = (imagePath = null, tilteText = "colTitle", pText = "content") => {
    let newText = pText.split("\n").map((item, i) => <p key={i}>{item}</p>);
    return (
      <div className="about-div-col d-flex flex-column justify-content-center align-items-center">
        <div className="about-div-img-wrapper d-flex justify-content-center align-items-center">
          <img className="about-div-img" src={imagePath} alt={tilteText} />
        </div>
        <h3>{tilteText}</h3>
        <p>{pText}</p>
      </div>
    );
  };

  return (
    <div fluid className="about-div main-divs" id="about-div">
      <div className="justify-content-center">
        <h2>{data.title}</h2>
        <p className="h2-subtitle">{data.subtitle}</p>
        <hr />
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center">
        {col(
          colsData[0].imgSrc,
          colsData[0].titleText,
          colsData[0].contentText
        )}
        {col(
          colsData[1].imgSrc,
          colsData[1].titleText,
          colsData[1].contentText
        )}
        {col(
          colsData[2].imgSrc,
          colsData[2].titleText,
          colsData[2].contentText
        )}
      </div>
    </div>
  );
}

export default About;
