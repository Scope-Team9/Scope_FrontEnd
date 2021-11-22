import React from "react";
import styled from "styled-components";

import { Grid } from "../../../elements/Index";

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

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 35px;
  border: 1px solid #c0aef6;
  border-radius: 50px;
  color: #c0aef6;
  margin: 10px auto auto auto;
  cursor: pointer;
  background-color: white;
  &:hover {
    color: white;
    background-color: #c0aef6;
    transform: translate();
    transition: 0.3s ease-out;
  }
`;

export default GenerateButton;
