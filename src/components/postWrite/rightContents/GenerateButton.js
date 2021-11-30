// GenerateButton.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid } from "../../../elements/Index";

// GenerateButton의 함수형 컴포넌트를 만든다..
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
  border: 1px solid #4e442d;
  border-radius: 50px;
  box-shadow: 0px 0px 10px #ddd;
  color: #4e442d;
  margin: 10px auto 10px auto;
  cursor: pointer;
  background-color: white;
  &:hover {
    color: white;
    background-color: #4e442d;
    transform: translate();
    transition: 0.3s ease-out;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default GenerateButton;
