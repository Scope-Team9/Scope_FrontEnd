import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Grid } from "../elements/Index";
import SideBar from "../components/SideBar";

const MainPage = () => {
  return (
    <>
      <ResponsiveSidebar>
        <SideBar />
      </ResponsiveSidebar>
      <Grid height='100%' bg='#ffff' padding='60px 0 10px 0'>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
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

export default MainPage;
