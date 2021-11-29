// TitleWrite.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid, Input, Text } from "../../../elements/Index";

// TitleWrite의 함수형 컴포넌트를 만든다.
const TitleWrite = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <TitleMedia>
          <Text>제목</Text>
        </TitleMedia>
        <Input
          width="100%"
          height="40px"
          padding="10px"
          margin="4px auto"
          border="1px solid #C4C4C4"
          borderRadius="10px"
          placeholder="제목을 입력해주세요."
          maxLength="35"
          inputFocusOutline="none"
          _onChange={(e) => {
            props.setTitle(e.target.value);
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

const InputMedia = styled.input`
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default TitleWrite;
