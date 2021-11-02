import React from "react";
import { Grid, Button } from "../../elements/Index";

const TestEight = props => {
  const { handleUserCreate, handleMemberCreate } = props;

  return (
    <Grid>
      <div>성향테스트 8번</div>
      <Grid display="flex" flexDirection="column">
        <Grid>
          <div>
            Q. 프로젝트에서 문제가 생겼을 때 당신이 생각하는 더 나은 방법은?
          </div>
          <button
            value="G"
            onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            G. 문제를 해결할 수 있는 방안을 찾고 그 방안이 이끌어 낼 결과에 대해
            생각한다.
          </button>
          <button
            value="P"
            onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            P. 문제가 발생한 원인을 찾고 문제 해결 과정에서 얻은 지식과 노하우에
            대해 생각한다.
          </button>
        </Grid>
        <Grid>
          <div>
            Q. 프로젝트에서 문제가 생겼을 때 당신의 팀원이 생각했으면 하는
            방법은?
          </div>
          <button
            value="G"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            G. 문제를 해결할 수 있는 방안을 찾고 그 방안이 이끌어 낼 결과에 대해
            생각한다.
          </button>
          <button
            value="P"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            P. 문제가 발생한 원인을 찾고 문제 해결 과정에서 얻은 지식과 노하우에
            대해 생각한다.
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestEight;