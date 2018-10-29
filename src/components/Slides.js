import React from 'react';
import Slider from 'react-slick';

export default class Slides extends React.Component {
  state = {
    destinations: [
      {name: 'florida', area: 'bahamas & caribbean', img: '../assets/pic01.png', alt: 'a picture of cuba'},
      {name: 'thailand', area: 'asia', img: '../assets/pic02.png', alt: 'something about thailand'},
      {name: 'malaysia', area: 'indonesia', img: '../assets/pic03.png', alt: 'malay stuff'},
      {name: 'scotland', area: 'united kingdom', img: '../assets/pic04.png', alt: 'things about kilts'},
      {name: 'australia', area: 'dingos', img: '../assets/pic05.png', alt: 'fosters and shrimps'},
      {name: 'spain', area: 'playa del something', img: '../assets/pic06.png', alt: 'sunbeds being stolen'}
    ]
  }
  render() {
    const destinations = this.state.destinations;
    const settings = {
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '0%',
      slidesToShow: 3,
      dots: false,
      autoplay: false,
      draggable: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            centerPadding: '25%',
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerPadding: '20%',
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            centerPadding: '12%',
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          { destinations.map(destination =>
            <div className="slide" key={ destination.name }>
              <img src={ destination.img } alt={ destination.alt }/>
              <h2>{ destination.name }</h2>
              <p>{ destination.area }</p>
              <a href="#" alt="click here to view the itinerary">View itinerary</a>
            </div>
          )}
        </Slider>
      </div>
    );
  }
}
