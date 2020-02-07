import React, { Component } from 'react';
import '../css/Carousel.css';

// This is a wrapper class that is conditionally rendered in accordance to the passed modifier prop. This wrapper class
// will render a flex container of varying heights.
class Carousel extends Component {
    render() {
        return (
            
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active carousel-overlay">
                <img className="d-block w-100 friendship carousel-overlay" alt=''/>
              </div>
              <div className="carousel-item carousel-overlay">
                <img className="d-block w-100 love carousel-overlay" alt=''/>
              </div>
              <div className="carousel-item carousel-overlay">
                <img className="d-block w-100 friendship-secondary carousel-overlay" alt=''/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        )
    }
}


export default Carousel;
