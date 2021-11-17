import React from "react";
import styled from "styled-components";
import Img from "../../images/PostAdd.jpg";

const LeftBanner = (props) => {
  return (
    <React.Fragment>
      <SideBarImg src={Img} style={{ maxWidth: "100%", height: "100%" }} />
    </React.Fragment>
  );
};

const SideBarImg = styled.img`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export default LeftBanner;
