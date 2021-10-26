import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Grid } from "../elements/Index";
import Carousel from "../components/Carousel";

const MainPage = () => {
  return (
    <Grid height="100%" bg="#ffff" padding="60px 0 10px 0">
      <HeaderWrapper>
        <Header />
        <Carousel />
      </HeaderWrapper>
    </Grid>
  );
};

const HeaderWrapper = styled.div`
  z-index: 100;
  position: sticky;
  top: 0px;
  background: #1111;
`;

export default MainPage;
