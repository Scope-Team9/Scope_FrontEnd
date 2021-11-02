import React from "react";
import { Grid, Button } from "../../elements/Index";

const TestNine = props => {
  const { handleUserCreate, handleMemberCreate } = props;

  return (
    <Grid>
      <div>성향테스트 9번</div>
      <Grid display="flex" flexDirection="column">
        <Grid>
          <div>
            Q. 지금까지 진행했던 프로잭트를 떠올렸을 때 가장 먼저 생각나는
            부분은?
          </div>
          <button
            value="G"
            onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            G. 프로젝트가 이끌어낸 결과와 그에 따른 성취감
          </button>
          <button
            value="P"
            onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            P. 프로젝트 과정에서 얻은 지식과 그에 따른 성취감
          </button>
        </Grid>
        <Grid>
          <div>
            Q. 당신의 팀원이 프로잭트를 떠올렸을 때 가장 먼저 생각났으면 하는
            부분은?
          </div>
          <button
            value="G"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            G. 프로젝트가 이끌어낸 결과와 그에 따른 성취감
          </button>
          <button
            value="P"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            P. 프로젝트 과정에서 얻은 지식과 그에 따른 성취감
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestNine;
