import React from "react";
import { Grid, Input, Text } from "../../../elements/Index";

const TitleWrite = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Text>제목</Text>
        <Input
          width="100%"
          height="40px"
          padding="10px"
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

export default TitleWrite;
