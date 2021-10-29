import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Image } from "../elements/Index";
import Cap from "../images/cap.PNG";
import Cap2 from "../images/django.png";
import $ from "jquery";
import jquery from "jquery";

const Carousel = () => {
  const settings = {
    dots: true,
    // 마지막 슬라이드에서 처음 슬라이드로
    infinite: true,
    speed: 3000,
    //
    slidesToShow: 1,
    slidesToScroll: 1,
    // 자동 넘김 / 스피드
    autoplay: true,
    autoplaySpeed: 7000,
    // 레이지 로딩할 거야?
    lazyLoad: true,
    // 슬라이더를 넘기지 않고 fade in/out 하는 식으로 트랜지션 됨
    // fade: true,
    pauseOnHover: true,
    // 좌우 화살표 줄 것인가
    arrows: false,
  };

  return (
    <div className="center" style={{ margin: "auto" }}>
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
