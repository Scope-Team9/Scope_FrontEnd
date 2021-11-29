// TitleWrite.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid, Input, Text } from "../../../elements/Index";

// TitleWrite의 함수형 컴포넌트를 만든다.
const UrlEdit = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <TitleMedia>
          <Text>오픈채팅 URL</Text>

          <Input
            width="100%"
            height="40px"
            padding="10px"
            margin="4px auto"
            border="1px solid #C4C4C4"
            borderRadius="10px"
            placeholder="오픈채팅방 URL을 입력해주세요."
            maxLength="35"
            editValue={props.chatUrl}
            inputFocusOutline="none"
            _onChange={(e) => {
              props.setChatUrl(e.target.value);
            }}
          ></Input>
        </TitleMedia>
      </Grid>
    </React.Fragment>
  );
};

const TitleMedia = styled.div`
  @media screen and (max-width: 600px) {
    width: 350px;
    margin: 10px auto;
    font-size: 10px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default UrlEdit;
