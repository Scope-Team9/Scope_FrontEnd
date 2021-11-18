import React from "react";
import { Grid, Text } from "../../../elements/Index";

import Select from "react-select";

const StatusWrite = (props) => {
  // 게시글 작성(프로젝트 상태)
  const projectstatus = [{ value: "모집중", label: "모집중" }];

  return (
    <React.Fragment>
      {/* 프로젝트 상태체크 */}
      <Grid margin="10px auto">
        <Text>프로젝트 상태체크</Text>
        <Select
          options={projectstatus}
          isLoading
          styles={props.styles}
          onChange={(e) => {
            let a;
            a = e["label"];
            props.setProjectstatus(a);
          }}
          placeholder={<div>상태를 설정해주세요.</div>}
        ></Select>
      </Grid>
    </React.Fragment>
  );
};

export default StatusWrite;
