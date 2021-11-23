// TitleDetail.js
// import를 한다.
import React from "react";
import styled from "styled-components";
import bannerImg from "../../images/PostDetail.png";

// TitleDetail의 함수형 컴포넌트를 만든다.
const LeftBanner = (props) => {
  return (
    <React.Fragment>
      <SideBarImg src={bannerImg} />
    </React.Fragment>
  );
};

// styled-components
const SideBarImg = styled.img`
  max-width: 100%;
  height: 920px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

// export
export default LeftBanner;
