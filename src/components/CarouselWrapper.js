import React from 'react';

import Slides from './Slides.js';

export default class CarouselWrapper extends React.Component{
  render(){
    return(
      <div>
        <div className="carousel-wrapper">
          <h6 className="carousel-title">our charter destinations</h6>
          <Slides />
        </div>
        <div className="cta">
          <a href="#" className="all-destinations">View all destinations</a>
        </div>
      </div>

    );
  }
}
