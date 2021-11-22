import React from "react";
import styled from "styled-components";
import { Grid } from "../../../elements/Index";

const EditButton = (props) => {
  return (
    <React.Fragment>
      <Grid display="flex" padding="16px">
        <Btn
          onClick={() => {
            props.editHandler();
          }}
        >
          포스트수정 완료
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
  border: 1px solid #b29cf4;
  border-radius: 50px;
  color: #fff;
  background: white;
  color: #b29cf4;
  margin: 10px auto 10px auto;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #b29cf4;
    border: 1px solid;
    transition-duration: 1s;
  }
`;

export default EditButton;
