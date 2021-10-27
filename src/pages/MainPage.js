/* eslint-disable */
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Grid } from "../elements/Index";
import Carousel from "../components/Carousel";
import SideBar from "../components/SideBar";
import Infinity from "../shared/Infinity";
import Stack from "../components/Stack";
import PostList from "../components/PostList";

const MainPage = () => {
  return (
    <>
      <Grid height="100%" bg="#ffff" padding="60px 0 10px 0">
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Grid
          top='500px'
          left='500px'
          width='1000px'
          backgroundColor='#111'
          height='500px'
        >
          강지훈
        </Grid>
      </Grid>

      <ResponsiveSidebar>
        <SideBar />
      </ResponsiveSidebar>

      <Grid margin="31px 0 0 100px ">
        <Inside>
          <Carousel />
          <Stacks>
            <Stack />
          </Stacks>
          <InsideImg>
            <PostList></PostList>
          </InsideImg>
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

const InsideImg = styled.div`
  @media screen and (max-width: 750px) {
    margin-left: -100px;
  } ;
`;

const Stacks = styled.div`
  display: flex;
  font-size: 50px;
  margin-top: 20px;
`;

export default MainPage;
