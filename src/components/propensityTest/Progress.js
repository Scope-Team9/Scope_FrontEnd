import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../elements/Index";

const Progress = props => {
  let count = 10;
  let currentStep = props.page;

  return (
    <Grid
      position="relative"
      height="60px"
      display="flex"
      alignItems="end"
      margin="auto"
    >
      <Grid
        width="50px"
        position="absolute"
        left={(currentStep / count) * 100 - 8 + "%"}
      >
        <ArrowBubbleTwo>
          <Grid textAlign="center">
            <Text size="12px">{(currentStep / count) * 100 + "%"}</Text>
          </Grid>
        </ArrowBubbleTwo>
      </Grid>
      <ProgressBar>
        <HighLight width={(currentStep / count) * 100 + "%"} />
      </ProgressBar>
    </Grid>
  );
};

const ProgressBar = styled.div`
  border: 3px solid #b29cf4;
  border-radius: 25px;
  background: #f1f9ff;
  width: 100%;
  height: 15px;
`;

const HighLight = styled.div`
  border-radius: 25px;
  background: #b29cf4;
  transition: 1s;
  width: ${props => props.width};
  height: 15px;
`;

const ArrowBubbleTwo = styled.div`
  position: relative;
  width: 100%;
  height: 25px;
  padding: 0 5px;
  background: #f1f9ff;
  /* -webkit-border-radius: 35px;
  -moz-border-radius: 35px; */
  border-radius: 10px;
  border: #b29cf4 solid 3px;

  ::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 10px 15px 0;
    border-color: #f1f9ff transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -4px;
    left: 15px;
  }

  ::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 12px 0;
    border-color: #b29cf4 transparent;
    display: block;
    width: 0;
    z-index: 0;
    bottom: -8px;
    left: 18px;
  }
`;

export default Progress;
