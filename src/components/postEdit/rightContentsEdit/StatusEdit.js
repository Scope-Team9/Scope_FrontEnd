import React from "react";
import { Grid, Text } from "../../../elements/Index";

import Select from "react-select";

const StatusEdit = (props) => {
  // 게시글 작성(프로젝트 상태)
  const projectStatused = [
    { value: "done", label: "모집중" },
    { value: "doing", label: "진행중" },
    { value: "ready", label: "종료" },
  ];

  return (
    <React.Fragment>
      <Grid margin="20px auto">
        <Text size="18px" bold>
          프로젝트 상태체크
        </Text>
        <Select
          options={projectStatused}
          styles={props.styles}
          value={projectStatused.filter(
            ({ label }) => label === props.projectStatus
          )}
          onChange={(data) => {
            props.setProjectstatus(data.label);
          }}
          placeholder={<div>상태를 설정해주세요.</div>}
        ></Select>
      </Grid>
    </React.Fragment>
  );
};

export default StatusEdit;
