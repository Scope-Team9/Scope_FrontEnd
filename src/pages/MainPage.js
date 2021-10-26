import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Grid } from "../elements/Index";
import Carousel from "../components/Carousel";
import SideBar from "../components/SideBar";

const MainPage = () => {
  return (
    <>
      <Grid height="100%" bg="#ffff" padding="60px 0 10px 0">
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      </Grid>

      <ResponsiveSidebar>
        <SideBar />
      </ResponsiveSidebar>

      <Grid margin="31px 0 0 100px ">
        <Inside>
          <Carousel />
        </Inside>
      </Grid>
    </>
  );
};

const HeaderWrapper = styled.div`
  z-index: 100;
  position: sticky;
  top: 0px;
  background: #1111;
`;

const ResponsiveSidebar = styled.div`
  @media screen and (max-width: 750px) {
    display: none;
  } ;
`;

const Inside = styled.div`
  @media screen and (max-width: 750px) {
    margin-left: -100px;
  } ;
`;

const FFlex = styled.div`
  margin-right: 60px;
`;

export default MainPage;
