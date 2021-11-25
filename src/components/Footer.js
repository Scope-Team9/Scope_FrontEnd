/* eslint-disable */
import React from "react";
import { Grid, Button } from "../elements/Index";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImgType from "../shared/ImgType";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import { history } from "../redux/configureStore";

const Footer = () => {
  const goToMypage = () => {
    history.push(`/mypage/${userInfo.userId}`);
  };
  const userInfo = useSelector(state => state.user);
  return (
    <Wrap>
      <Grid display="flex" bg="#fff" border="1px solid #111">
        <FooterBtn>
          <HomeIcon sx={{ color: "#17334A", fontSize: 35 }} />
        </FooterBtn>
        <FooterBtn>
          <AddIcon sx={{ color: "#17334A", fontSize: 35 }} />
        </FooterBtn>
        <FooterBtn onClick={goToMypage}>
          <ImgType type={userInfo.userPropensityType} />
        </FooterBtn>
      </Grid>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    width: 100vw;
    margin: auto;
    height: 5.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0);
    z-index: 10;
    position: fixed;
    bottom: 1%;
  }
  @media screen and (max-width: 420px) {
    width: 100vw;
    margin: auto;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0);

    z-index: 10;
    position: fixed;
    bottom: 0%;
  } ;
`;

const IconWrap = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;
  @media screen and (max-width: 595px) {
    width: 90%;
  } ;
`;

const FooterBtn = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export default Footer;
