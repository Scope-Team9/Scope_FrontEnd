import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Image } from "../elements/Index";
import Cap from "../images/cap.PNG";
import Cap2 from "../images/django.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // 자동 넘김 / 스피드
    autoplay: true,
    autoplaySpeed: 7000,
    // 마지막 슬라이드에서 처음 슬라이드로
    infinite: true,
    speed: 2000,
    // 레이지 로딩할 거야?
    lazyLoad: true,
    // 슬라이더를 넘기지 않고 fade in/out 하는 식으로 트랜지션 됨
    // fade: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image src={Cap} shape="main" />
        </div>
        <div>
          <Image src={Cap2} shape="main" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
