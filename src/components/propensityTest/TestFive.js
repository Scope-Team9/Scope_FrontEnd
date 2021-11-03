import React from "react";
import { Grid, Button } from "../../elements/Index";

const TestFive = props => {
  const { handleUserCreate, handleMemberCreate } = props;

  return (
    <Grid>
      <div>성향테스트 5번</div>
      <Grid display="flex" flexDirection="column">
        <Grid>
          <div>Q5.당신이 생각하는 이상적인 회의의 모습은?</div>
          <button
            value="V"
            onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            능력에 따른 적절한 권한의 분배 하에 진행되는 회의
          </button>
          <button
            value="H"
            onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            모두 동등한 권한을 가지고 진행되는 회의
          </button>
        </Grid>
        <Grid>
          <div>Q5.당신의 팀원이 원했으면 하는 이상적인 회의의 모습은?</div>
          <button
            value="V"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            V. 능력에 따른 적절한 권한의 분배 하에 진행되는 회의
          </button>
          <button
            value="H"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            H. 모두 동등한 권한을 가지고 진행되는 회의
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestFive;
