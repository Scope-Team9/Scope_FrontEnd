// ContentWrite.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

// ContentWrite의 함수형 컴포넌트를 만든다.
const ContentWrite = (props) => {
  return (
    <React.Fragment>
      <ContentMedia>
        <Grid margin="10px auto">
          <Text color="#4e442d">프로젝트 내용적기</Text>
          <TextArea
            placeholder="프로젝트 내용을 입력해주세요."
            onChange={(e) => {
              props.setContents(e.target.value);
            }}
          ></TextArea>
        </Grid>
      </ContentMedia>
    </React.Fragment>
  );
};

// styled-components
const TextArea = styled.textarea`
  width: 97%;
  height: 300px;
  padding: 10px;
  font-size: 15px;
  margin: 4px auto;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #ddd;
  outline: none;
  @media screen and (max-width: 600px) {
    height: 200px;
    width: 99%;
  }
`;

const ContentMedia = styled.div`
  @media screen and (max-width: 600px) {
    width: 350px;
    font-size: 10px;
  }

  @media screen and (max-width: 500px) {
    width: 330px;
    font-size: 10px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default ContentWrite;
