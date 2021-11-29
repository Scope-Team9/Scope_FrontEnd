/* eslint-disable */
import React, { useState } from "react";
import "./MainSlide.css";
import { history } from "../../redux/configureStore";
import styled from "styled-components";
import Slider from "react-slick";
import { Grid, Button, Text, Image } from "../../elements/Index";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import PropensityTest from "../propensityTest/PropensityTest";
import LoginModal from "../LoginModal";
import { Dialog } from "@material-ui/core";
import Slide from "./SlideData.json";
import EmailAuth from "../EmailAuth";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const MainSlide = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [loginShowModal, setLoginShowModal] = React.useState(false);
  const [emailShowModal, setEmailShowModal] = React.useState(false);
  const userInfo = useSelector(state => state.user);
  const isToken = document.cookie;

  const history = useHistory();

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <KeyboardArrowRightIcon fontSize="small" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <KeyboardArrowLeftIcon fontSize="small" />
      </div>
    );
  };

  const settings = {
    dots: true, //화면아래 컨텐츠 갯수 표시
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 5000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    draggable: true, //드래그 가능 여부
    infinite: true, //무한반복옵션
    lazyLoad: true,
    speed: 400, //다음버튼 누르고 다음화면 뜨는데까지 걸리는 시간
    slidesToShow: 1, //화면에 보여질 개수
    centerMode: true, //활성화 된 슬라이드 가운데 배치
    centerPadding: 0, //center 슬라이드 패딩값
    // nextArrow: <NextArrow />, //다음 화살표 모양 설정
    // prevArrow: <PrevArrow />, //다음 화살표 모양 설정
    beforeChange: (current, next) => setImageIndex(next), // beforeChange(slick, currentSlide)	슬라이드 전 호출
    // responsive: [
    //   //반응형웹구현 옵션
    //   {
    //     breakpoint: 768, //화면사이즈
    //     settings: {
    //       centerMode: true,
    //       centerPadding: "40px",
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  const ClickEvent = item => {
    if (!isToken && item.division !== null) {
      setLoginShowModal(true);
    }
    if (item.division === "test" && isToken) {
      setShowModal(true);
    }
    if (item.division === "email" && isToken) {
      setEmailShowModal(true);
    }
    if (item.division === "mypage" && isToken) {
      history.push(`/mypage/${userInfo.userId}`);
    }
  };

  const TestClose = () => {
    setShowModal(false);
  };
  const EmailClose = () => {
    setEmailShowModal(false);
  };

  return (
    <React.Fragment>
      <div className="Container" style={{ width: "97%" }}>
        <Slider {...settings}>
          {Slide.slide.map(item => (
            <div key={item.id} className="slide">
              <img
                src={item.img}
                alt={item.img}
                onClick={() => {
                  ClickEvent(item);
                }}
              />
            </div>
          ))}
        </Slider>
        <Dialog maxWidth={"sm"} scroll="paper" open={showModal}>
          <SignupModalWrap width="550px" height="100%">
            <PropensityTest TestClose={TestClose} />
          </SignupModalWrap>
        </Dialog>
        <LoginModal
          showModal={loginShowModal}
          setShowModal={setLoginShowModal}
        />
        <EmailAuth
          modal={emailShowModal}
          setModal={setEmailShowModal}
          EmailClose={EmailClose}
        />
      </div>
    </React.Fragment>
  );
};

const SignupModalWrap = styled.div`
  height: 100%;
  width: 550px;

  @media (max-width: 650px) {
    width: 310px;
    height: 550px;
    font-size: 11px;
  }
`;

export default MainSlide;
