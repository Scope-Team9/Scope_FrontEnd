// ContentWrite.js
/* eslint-disable */

// import
import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

// ContentWrite 함수형 컴포넌트 생성
const ContentWrite = (props) => {
  return (
    <React.Fragment>
      <Grid margin="20px auto">
        <Text size="18px" bold>
          프로젝트 내용적기
        </Text>
        <TextArea
          placeholder="프로젝트 내용을 입력해주세요."
          onChange={(e) => {
            props.setContents(e.target.value);
          }}
        ></TextArea>
      </Grid>
    </React.Fragment>
  );
};

// styled-components
const TextArea = styled.textarea`
  width: 97%;
  height: 440px;
  padding: 10px;
  margin: 4px auto;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
`;

// export
export default ContentWrite;
