// TitleWrite.js
/* eslint-disable */

// import
import React from "react";
import { Grid, Input, Text } from "../../../elements/Index";

// TitleWrite 함수형 컴포넌트 생성
const TitleWrite = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Text size="18px" bold>
          제목
        </Text>
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
          fontSize="16px"
          _onChange={(e) => {
            props.setTitle(e.target.value);
          }}
        ></Input>
      </Grid>
    </React.Fragment>
  );
};

// export
export default TitleWrite;