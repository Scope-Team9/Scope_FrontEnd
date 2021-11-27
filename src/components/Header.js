/* eslint-disable */
import React from "react";
import { Grid } from "../elements/Index";
import styled from "styled-components";
import HeaderLeft from "../components/HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = props => {
  //로고를 망원경 하나로 바꾸고 , 닉네임 없애고, 로그아웃을 삼단선으로
  return (
    <>
      <Wrap>
        <Grid width="auto" height="auto" margin="0 0 0 20px">
          <HeaderLeft />
        </Grid>
        <Grid width="auto" height="auto" margin="0 20px 0 0 ">
          <HeaderRight changeMypageStatus={props.changeMypageStatus} />
        </Grid>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  max-width: 1900px;
  margin: auto;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
  padding: 20px 0;
  z-index: 10;
  position: relative;

  @media screen and (max-width: 750px) {
    width: 100vw;
    height: 20px;
    margin: auto;
  } ;
`;

export default Header;
