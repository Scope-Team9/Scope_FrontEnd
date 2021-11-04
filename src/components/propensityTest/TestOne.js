import React from "react";
import styled from "styled-components";
import { Grid, Button } from "../../elements/Index";

const TestOne = props => {
  const { handleUserCreate, handleMemberCreate } = props;

  const ToggleButton = () => {
    const [active, setActive] = React.useState;
  };
  // const [bChecked, setChecked] = React.useState(false);

  return (
    <Grid>
      <Grid height="30px" bg="#dddddd">
        리더형/팔로워형 테스트
      </Grid>
      <div>성향테스트 1번</div>
      <Grid display="flex" flexDirection="column">
        <Grid>
          <div>
            Q1.팀 회의할 때 당신의 모습에 더 가까운 것은?
            <Button
              isTest
              isValue="L"
              _onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              내 주장을 펼치며 회의 분위기를 탄탄하게 이끌기
            </Button>
            <Button
              isTest
              isValue="F"
              _onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              다른 사람들의 의견을 들으며 뭘 맡아서 해야할지 파악하기
            </Button>
          </div>
        </Grid>
        <Grid>
          <div>Q2.팀 회의할 때 선호하는 팀원의 모습에 더 가까운 것은?</div>
          <Button
            isTest
            isValue="L"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            내 주장을 펼치며 회의 분위기를 탄탄하게 이끌기
          </Button>
          <Button
            isTest
            isValue="F"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            다른 사람들의 의견을 들으며 뭘 맡아서 해야할지 파악하기
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestOne;
