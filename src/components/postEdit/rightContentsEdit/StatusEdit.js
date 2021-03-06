// StatusEdit.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";
import Select from "react-select";

// StatusEdit의 함수형 컴포넌트를 만든다.
const StatusEdit = (props) => {
  const projectStatused = [
    { value: "done", label: "모집중" },
    { value: "doing", label: "진행중" },
    { value: "ready", label: "종료" },
  ];

  return (
    <React.Fragment>
      <StatusMedia>
        <Grid margin="10px auto">
          <Text color="#4c4759">프로젝트 상태체크</Text>
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
      </StatusMedia>
    </React.Fragment>
  );
};

// styled-components
const StatusMedia = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    width: 350px;
    height: 10px;
    font-size: 10px;
    margin-bottom: 70px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default StatusEdit;
