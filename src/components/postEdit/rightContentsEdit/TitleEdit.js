// TitleEdit.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid, Text, Input } from "../../../elements/Index";

// TitleEdit의 함수형 컴포넌트를 만든다.
const TitleEdit = (props) => {
  return (
    <React.Fragment>
      <TitleMedia>
        <Grid>
          <Text color="#4c4759">제목</Text>
          <Input
            width="100%"
            maxLength="35"
            height="40px"
            padding="10px"
            margin="4px auto"
            border="1px solid #C4C4C4"
            borderRadius="10px"
            boxShadow="0px 0px 10px #ddd"
            placeholder="제목을 입력해주세요."
            inputFocusOutline="none"
            type="text"
            editValue={props.title}
            _onChange={(e) => {
              props.setTitle(e.target.value);
            }}
          />
        </Grid>
      </TitleMedia>
    </React.Fragment>
  );
};

const TitleMedia = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    width: 350px;
    height: 10px;
    margin-bottom: 40px;
    font-size: 10px;
  }
`;

// export
export default TitleEdit;
