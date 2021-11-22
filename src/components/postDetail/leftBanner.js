import React from "react";
import styled from "styled-components";
import bannerImg from "../../images/PostDetail.png";

const LeftBanner = (props) => {
  return (
    <React.Fragment>
      <SideBarImg
        src={bannerImg}
        style={{ maxWidth: "100%", height: "920px" }}
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
