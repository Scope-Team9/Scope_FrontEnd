import React from "react";
import { Grid, Text, Input } from "../../../elements/Index";

const SummaryWrite = (props) => {
  return (
    <React.Fragment>
      {/* 한줄소개 */}
      <Grid margin="10px auto auto">
        <Text margin="auto 100px auto auto">한줄소개</Text>
        <Input
          width="100%"
          maxLength="60"
          height="40px"
          padding="10px"
          placeholder="프로젝트를 한줄소개를 소개해주세요."
          borderRadius="6px"
          border="1px solid #C4C4C4"
          inputFocusOutline="none"
          fontSize="16px"
          _onChange={(e) => {
            props.setSummary(e.target.value);
          }}
        ></Input>
      </Grid>
    </React.Fragment>
  );
};

export default SummaryWrite;
