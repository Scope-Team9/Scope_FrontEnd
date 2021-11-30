/* eslint-disable */
import React from "react";
import { Grid } from "../elements/Index";
import styled from "styled-components";
import HeaderLeft from "../components/HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = (props) => {
  //로고를 망원경 하나로 바꾸고 , 닉네임 없애고, 로그아웃을 삼단선으로
  return (
    <>
      <Wrap>
        <Grid width="auto" height="auto" margin="0 0 0 20px">
          <HeaderLeft />
        </Grid>
        <Grid width="auto" height="auto" margin="0 20px 0 0 ">
          <HeaderRight />
        </Grid>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  max-width: 1400px;
<<<<<<< HEAD
=======
  width: 100vw;
>>>>>>> c41bccbb6a8c0a3c38a82200a8f12567b7394eaf
  margin: auto;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
  /* background-color: white; */
  padding: 20px 0;
  z-index: 10;
  position: relative;
  /* left: 50%;
  transform: translate(-50%, 0); */
`;

export default Header;
