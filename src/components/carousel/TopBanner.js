/* eslint-disable */
import React from "react";
import { Image, Grid, Button, Text } from "../../elements/Index";
import styled from "styled-components";
import Symbol from "../../images/tiger.jpg";
import PropensityTest from "../propensityTest/PropensityTest";
import { history } from "../../redux/configureStore";

const TopBanner = () => {
  const is_token = document.cookie.split("=")[1];
  return (
    <>
      <Grid width="70vw" margin="0 auto 7rem auto">
        <Title>SCOPE</Title>
        <Sub>스스로 코딩하는 프로젝트</Sub>
        <Grid
          display="flex"
          width="100%"
          justifyContents="space-between"
          alignItems="end"
        >
          <Grid>
            <Button
              width="150px"
              _onClick={() => {
                is_token
                  ? history.push("/postwrite")
                  : window.alert("로그인이 필요합니다");
              }}
            >
              성향테스트
            </Button>
          </Grid>

          <img style={{ width: "50%" }} src={Symbol} />
        </Grid>
      </Grid>
    </>
  );
};

const Title = styled.h1`
  font-size: 3rem;
  margin: 1.3rem 0;
  letter-spacing: 0.05rem;
`;

const Sub = styled.span`
  font-size: 1.5rem;
  letter-spacing: 0.01rem;
`;

export default TopBanner;
