import React from "react";
import { Image, Grid, Button, Text } from "../../elements/Index";
import styled from "styled-components";
import Symbol from "../../images/tiger.jpg";

const TopBanner = () => {
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
            <Button width="10vw" borderRadius="5px">
              성향테스트
            </Button>
          </Grid>

          <img src={Symbol} />
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
