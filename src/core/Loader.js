import React, { Component } from 'react'
import "../css/Loader.css";

// Displays a loading animation with conditional rendering depending on the modifier prop passed. 
class Loader extends Component {

    renderLoader = () => {
        if (this.props.modifier === "spinner") {
          return <div className="loader" id="loader-1" />;

        }
        else if(this.props.modifier === "dots"){
            return(<div className="loader" id="loader-2">
            <span></span>
            <span></span>
            <span></span>
          </div>)
        }
    }

    render() {
        return (
            this.renderLoader()
        )
    }
}

export default Loader;


