import React from "react";
import { Grid, Button, Text } from "../../elements/Index";

const TestNine = props => {
  const { handleUserCreate, handleMemberCreate } = props;

  return (
    <Grid>
      <Grid display="flex" flexDirection="column">
        <Grid margin="20px 0">
          <div>
            Q9. 지금까지 진행했던 프로잭트를 떠올렸을 때 가장 먼저 생각나는
            부분은?
          </div>
          <Button
            isTest
            isValue="G"
            _onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            프로젝트가 이끌어낸 결과와 그에 따른 성취감
          </Button>
          <Button
            isTest
            isValue="P"
            _onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            프로젝트 과정에서 얻은 지식과 그에 따른 성취감
          </Button>
        </Grid>
        <Grid>
          <div>
            Q9.당신의 팀원이 프로잭트를 떠올렸을 때 가장 먼저 생각났으면 하는
            부분은?
          </div>
          <Button
            isTest
            isValue="G"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            프로젝트가 이끌어낸 결과와 그에 따른 성취감
          </Button>
          <Button
            isTest
            isValue="P"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            프로젝트 과정에서 얻은 지식과 그에 따른 성취감
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestNine;
