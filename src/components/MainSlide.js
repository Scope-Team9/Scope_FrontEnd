import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import SlideOne from "../images/slideone.png";
import SlideTwo from "../images/slidetwo.png";
import SlideThree from "../images/slidethree.png";

const images = [SlideOne, SlideTwo, SlideThree];

const MainSlide = () => {
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
  };

  return (
    <>
      <Slider>
        {images.map((img, idx) => {
          <div>
            <img src={img} alt={img} />
          </div>;
        })}
      </Slider>
    </>
  );
};

export default MainSlide;
