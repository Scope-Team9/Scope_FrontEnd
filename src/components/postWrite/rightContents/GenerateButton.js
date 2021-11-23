// GenerateButton.js
/* eslint-disable */

// import
import React from "react";
import styled from "styled-components";
import { Grid } from "../../../elements/Index";

// GenerateButton 함수형 컴포넌트 생성
const GenerateButton = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Btn
          onClick={() => {
            props.submitHandler();
          }}
        >
          프로젝트 생성하기
        </Btn>
      </Grid>
    </React.Fragment>
  );
};

// styled-components
const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 35px;
  border: 1px solid #554475;
  border-radius: 50px;
  color: #554475;
  margin: 10px auto auto auto;
  cursor: pointer;
  background-color: white;
  &:hover {
    color: white;
    background-color: #554475;
    transform: translate();
    transition: 0.3s ease-out;
  }
`;

// export
export default GenerateButton;