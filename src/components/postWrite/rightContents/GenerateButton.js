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
  border: none;
  border-radius: 50px;
  color: #fff;
  margin: 10px auto 10px auto;
  cursor: pointer;
`;

export default GenerateButton;
