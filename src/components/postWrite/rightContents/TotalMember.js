// TotalMenber.js
/* eslint-disable */

// import를 한다.
import React from "react";
import { Grid, Text } from "../../../elements/Index";
import Select from "react-select";

// TotalMember의 함수형 컴포넌트를 만든다.
const TotalMember = (props) => {
  const projectMembers = [
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
  ];

  return (
    <React.Fragment>
      <Grid margin="20px auto">
        <Text size="18px" bold>
          프로젝트 총 인원
        </Text>
        <Select
          options={projectMembers}
          styles={props.styles}
          onChange={(e) => {
            let b;
            b = e["label"];
            props.setTotalmember(b);
          }}
          placeholder={<div>총 인원을 선택해주세요.</div>}
        ></Select>
      </Grid>
    </React.Fragment>
  );
};

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default TotalMember;
