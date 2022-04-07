// TotalMenber.js
/* eslint-disable */

// import를 한다
import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";
import Select from "react-select";

// TotalMember의 함수형 컴포넌트를 만든다
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
      <Grid margin="10px auto">
        <TotalMemberMedia>
          <Text color="#4e442d">프로젝트 총 인원</Text>
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
        </TotalMemberMedia>
      </Grid>
    </React.Fragment>
  );
};

// styled-components
const TotalMemberMedia = styled.div`
  @media screen and (max-width: 600px) {
    width: 350px;
    margin: auto;
    font-size: 10px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다
export default TotalMember;
