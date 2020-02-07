import React, { Component } from "react";
import {Link} from 'react-router-dom';

import defaultProfile from "../images/Profile.svg";


// Renders a basic user card
class Card extends Component {

  render() {

    // Conditional rendering of default photo or one uploaded by a user
    const profilePhoto =
      typeof this.props.userInfo.photo != "undefined" && typeof this.props.userInfo.photo != null
        ? `${process.env.REACT_APP_SERVER_URL}/user/photo/${this.props.userInfo._id}`
        : defaultProfile;

    return (

      <div className="card" style={{ width: "18rem"}}>
    
      <img className="card-img-top" src={profilePhoto} style={{ maxHeight: "160px", maxWidth: "18rem"}} alt="Profile Image" />

        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <hr />
          <h6 className="card-subtitle mb-2 text-muted">{this.props.titleSecondary}</h6>
          <p className="card-text">
            {this.props.text}
            <hr />
            {this.props.email}
          </p>
          <Link to={{pathname: `/user/public/${this.props.userInfo._id}`, state: this.props.userInfo}} className="btn btn-outline-success btn-block">
            Profile
          </Link>
        </div>
      </div>

    );
  }
}

export default Card;
