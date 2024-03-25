import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="slide slide1">
        <h3>Slide 1</h3>
      </div>
      <div className="slide slide2">
        <h3>Slide 2</h3>
      </div>
      <div className="slide slide3">
        <h3>Slide 3</h3>
      </div>
    </Slider>
  );
}

export default Slide;
