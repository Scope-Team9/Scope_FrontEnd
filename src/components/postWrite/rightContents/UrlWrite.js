// TitleWrite.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid, Input, Text } from "../../../elements/Index";

// TitleWrite의 함수형 컴포넌트를 만든다.
const UrlWrite = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <TitleMedia>
          <Text color="#4e442d">
            오픈채팅 URL
            <SubDescription> *(URL을 정확히 입력해주세요.)</SubDescription>
          </Text>
        </TitleMedia>
        <Input
          width="100%"
          height="40px"
          padding="10px"
          margin="4px auto"
          border="1px solid #C4C4C4"
          borderRadius="10px"
          placeholder="오픈채팅방 URL을 입력해주세요."
          maxLength="35"
          boxShadow="0px 0px 10px #ddd"
          inputFocusOutline="none"
          _onChange={(e) => {
            props.setChatUrl(e.target.value);
          }}
        ></Input>
      </Grid>
    </React.Fragment>
  );
};

const TitleMedia = styled.div`
  @media screen and (max-width: 600px) {
    width: 350px;
    margin: auto;
    font-size: 10px;
  }
`;

const SubDescription = styled.span`
  color: red;
  font-size: 12px;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default UrlWrite;
