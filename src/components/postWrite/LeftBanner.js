// LeftBanner.js
/* eslint-disable */

// import
import React from "react";
import styled from "styled-components";
import Img from "../../images/PostAdd.jpg";

// LeftBanner 함수형 컴포넌트 생성
const LeftBanner = (props) => {
  return (
    <React.Fragment>
      <SideBarImg src={Img} />
    </React.Fragment>
  );
};

// styled-components
const SideBarImg = styled.img`
  max-width: 100%;
  height: 100%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

// export
export default LeftBanner;
