import React from "react";
import { Grid, Input } from "../../../elements/Index";

const TitleWrite = (props) => {
  return (
    <React.Fragment>
      <Grid>
        {/* 제목 */}
        <Grid>제목</Grid>
        <Input
          width="100%"
          maxLength="35"
          height="40px"
          padding="10px"
          border="1px solid #C4C4C4"
          placeholder="제목을 입력해주세요."
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
