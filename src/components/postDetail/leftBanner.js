import React from "react";
import styled from "styled-components";
import bannerImg from "../../images/PostDetail.png";

const LeftBanner = (props) => {
  console.log("메모");
  return (
    <React.Fragment>
      <SideBarImg
        src={bannerImg}
        style={{ maxWidth: "650px", height: "100%" }}
      />
    </React.Fragment>
  );
};

const SideBarImg = styled.img`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

// memo를 쓰면 리랜더링 방지
export default React.memo(LeftBanner);
