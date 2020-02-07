import React, { Component } from "react";
import "../css/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // A boolean value that is used as a switch to conditionally re-render with a helper function based on whether
      // localStorage has a token stored in it or not
      forceUpdate: false
    };
  }

  
  // Conditional rendering of Logout/Login, used in the render method
  auth = () => {
    if (localStorage.getItem("jwt") !== null) {
      return (
        <React.Fragment>
          <li className="nav-item">
            <a to="/" className="nav-link" onClick={this.signout}>
              Log Out
            </a>
          </li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <li className="nav-item">
            <a to="/" className="nav-link">
              Sign up
            </a>
          </li>
          <li className="nav-item">
            <a to="/" className="nav-link">
              Login
            </a>
          </li>
        </React.Fragment>
      );
    }
  };

  // Force update component function. The built in function of react didn't work for some reason so I made something similar
  // On my own. Will refactor this once I figure out why it didn't work.
  forceUpdate = () => {
    this.setState(curState => ({ forceUpdate: !curState.forceUpdate }));
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <span className="container">
            <a to="/" className="navbar-brand">
              <i className="fas fa-users"></i> Socialify
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto nav-tabs">
                {/*  */}
              </ul>
              {/* Authentication Buttons */}
              <ul className="navbar-nav nav-tabs">{this.auth()}</ul>
              {/*  */}
            </div>
          </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;
