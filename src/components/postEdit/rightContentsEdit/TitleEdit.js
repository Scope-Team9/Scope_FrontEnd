import React from "react";
import { Grid, Text, Input } from "../../../elements/Index";

const TitleEdit = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Text>제목</Text>
        <Input
          width="100%"
          maxLength="35"
          height="40px"
          padding="10px"
          border="1px solid #C4C4C4"
          placeholder="제목을 입력해주세요."
          inputFocusOutline="none"
          fontSize="16px"
          type="text"
          editValue={props.title}
          _onChange={(e) => {
            props.setTitle(e.target.value);
          }}
        />
      </Grid>
    </React.Fragment>
  );
};

export default TitleEdit;
