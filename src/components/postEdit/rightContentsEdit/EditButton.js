// EditButton.js
/* eslint-disable */

// import를 한다
import React from "react";
import styled from "styled-components";
import { Grid } from "../../../elements/Index";

// EditButton의 함수형 컴포넌트를 만든다
const EditButton = (props) => {
  return (
    <React.Fragment>
      <EditMedia>
        <Grid display="flex">
          <Btn
            onClick={() => {
              props.editHandler();
            }}
          >
            포스트수정 완료
          </Btn>
        </Grid>
      </EditMedia>
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
  border: 1px solid #bbb4d9;
  border-radius: 50px;
  color: #fff;
  background: white;
  color: #bbb4d9;
  margin: 10px auto 10px auto;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #bbb4d9;
    border: 1px solid;
    transition: 0.3s ease-out;
  }
`;

const EditMedia = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다
export default EditButton;
