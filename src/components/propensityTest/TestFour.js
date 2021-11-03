import React from "react";
import { Grid, Button } from "../../elements/Index";

const TestFour = props => {
  const { handleUserCreate, handleMemberCreate } = props;

  return (
    <Grid width="90%" margin="auto">
      <Grid height="30px" bg="#007BFF">
        수직적/수평적 조직형 테스트
      </Grid>
      <div>성향테스트 4번</div>
      <Grid display="flex" flexDirection="column">
        <Grid>
          <div>
            Q4.프로젝트를 진행함에 있어서 당신의 생각에 더 가까운 문장은?
          </div>
          <button
            value="V"
            onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            팀장의 존재는 프로젝트를 진행함에 있어 필수적이다.
          </button>
          <button
            value="H"
            onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            소통이 원활하게만 잘 된다면 팀장이 없어도 문제없이 프로젝트를 진행할
            수 있다.
          </button>
        </Grid>
        <Grid>
          <div>
            Q4.프로젝트를 진행함에 있어서 당신이 원하는 팀원의 생각에 더
            가까웠으면 하는 문장은?
          </div>
          <button
            value="V"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            팀장의 존재는 프로젝트를 진행함에 있어 필수적이다.
          </button>
          <button
            value="H"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            소통이 원활하게만 잘 된다면 팀장이 없어도 문제없이 프로젝트를 진행할
            수 있다.
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestFour;
