import React, { Component } from "react";
import "../css/AvatarCard.css";

export default class AvatarCard extends Component {
  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="card-image"
              src={this.props.image}
              alt="Avatar"
            />
          </div>
          <div className="flip-card-back">
              <span className="avatar-card-text">
            <h1 className="font-weight-bold">{this.props.name}</h1>
            <p>{this.props.phraseOne}</p>
            <p>{this.props.phraseTwo}</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
