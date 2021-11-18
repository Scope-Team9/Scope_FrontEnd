import React from "react";
import { Grid, Text } from "../../../elements/Index";

const ContentWrite = (props) => {
  return (
    <React.Fragment>
      {/* 프로젝트 내용적기 */}
      <Grid>
        <Text>프로젝트 내용적기</Text>
        <textarea
          style={{
            width: "96%",
            height: "200px",
            padding: "10px",
            border: "1px solid #C4C4C4",
            borderRadius: "6px",
            fontSize: "16px",
            outline: "none",
          }}
          placeholder="프로젝트 내용을 입력해주세요."
          onChange={(e) => {
            props.setContents(e.target.value);
          }}
        ></textarea>
      </Grid>
    </React.Fragment>
  );
};

export default ContentWrite;
