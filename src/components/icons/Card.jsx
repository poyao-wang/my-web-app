import React, { Component } from "react";
import "./Card.css";

class ProjCard extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.imgSrc}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitleText}</h5>
          <p className="card-text">{this.props.cardText}</p>
          <div className="d-flex justify-content-center">
            <a
              href={this.props.btnLink}
              className="btn btn-primary card-btn"
              target="_blank"
            >
              {this.props.btnText}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjCard;
