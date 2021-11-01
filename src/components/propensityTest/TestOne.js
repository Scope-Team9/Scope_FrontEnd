import React from "react";
import { Grid } from "../../elements/Index";

const TestOne = props => {
  const { setUserPropensityType, setMemberPropensityType, handleUserCreate } =
    props;
  return (
    <div>
      <Grid bg="#007BFF">리더형/팔로워형 테스트</Grid>
      <div>성향테스트 1번</div>
      <Grid diplay="flex">
        <Grid>
          <div>
            Q1.팀 회의할 때 당신의 모습에 더 가까운 것은?
            <button
              value="L"
              onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              내 주장을 펼치며 회의 분위기를 탄탄하게 이끌기
            </button>
            <button
              value="F"
              onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              다른 사람들의 의견을 들으며 뭘 맡아서 해야할지 파악하기
            </button>
          </div>
        </Grid>
        <Grid>
          <div>Q2.팀 회의할 때 선호하는 팀원의 모습에 더 가까운 것은?</div>
          <button
            value="L"
            onClick={e => {
              setMemberPropensityType(e.target.value);
            }}
          >
            내 주장을 펼치며 회의 분위기를 탄탄하게 이끌기
          </button>
          <button
            value="F"
            onClick={e => {
              setMemberPropensityType(e.target.value);
            }}
          >
            다른 사람들의 의견을 들으며 뭘 맡아서 해야할지 파악하기
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TestOne;
