import React, { Component } from "react";
import Slider from "react-slick";
import '../Sliderr.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class Sliderr extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 785,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
    
        {
          breakpoint: 627,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="smain">
        <h2 className="sh2"> Services </h2>
        <Slider {...settings}>
          <div className="sone">
            <h3 className="sh3">Singer</h3>  
         
          </div>
          <div className="sone">
            <h3 className="sh3">Singer</h3>  
         
          </div>
         
          <div className="sone">
            <h3 className="sh3">Singer</h3>  
         
          </div>
         
          <div className="sone">
            <h3 className="sh3">Singer</h3>  
         
          </div>
         

          <div className="sone">
            <h3 className="sh3">Singer</h3>  
         
          </div>
          <div className="sone">
            <h3 className="sh3">Singer</h3>  
         
          </div>
         
          <div className="sone">
            <h3 className="sh3">Singer</h3>  
         
          </div>
         
         
         
        </Slider>
      </div>
    );
  }
}

