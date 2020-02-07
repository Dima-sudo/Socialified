import React, { Component } from "react";
import "../css/Section.css";

class Section extends Component {
    // Conditional rendering of section containers with different styling depending on the modifier props passed, wrapper class.
  renderSection = () => {
    if (this.props.modifier === "primary") {
      return <div className="section-primary">{this.props.children}</div>;
    } else if (this.props.modifier === "secondary") {
      return <div className="section-secondary">{this.props.children}</div>;
    } else if (this.props.modifier === "footer") {
      return (
        <div className="footer">
          {this.props.children}
        </div>
      );
    }
    else if (this.props.modifier === "footer-trimmed") {
        return (
          <div className="footer container">
            {this.props.children}
          </div>
        );
      }
      else if (this.props.modifier === "secondary-trimmed") {
        return (
          <div className="section-secondary container">
            {this.props.children}
          </div>
        );
      }
  };

  render() {
    return this.renderSection();
  }
}

export default Section;
