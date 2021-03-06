// LeftBanner.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import Img from "../../images/PostDetail.png";

// LeftBanner의 함수형 컴포넌트를 만든다.
const LeftBanner = (props) => {
  return (
    <React.Fragment>
      <SideBarImg src={Img} />
    </React.Fragment>
  );
};

// styled-components
const SideBarImg = styled.img`
  width: 650px;
  max-width: 100%;
  height: 1002px;
  border-radius: 26px 0px 0px 26px;
  margin-top: 2.5px;
  margin-left: 1px;
  @media screen and (max-width: 1600px) {
    max-width: 80%;
  }
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default LeftBanner;
