import React from "react";
import { Grid, Button, Text } from "../../elements/Index";

const TestEight = props => {
  const { handleUserCreate, handleMemberCreate } = props;

  return (
    <Grid>
      <Grid height="30px" bg="#dddddd" textAlign="center">
        <Text>결과/과정 중심형 테스트 #1</Text>
      </Grid>
      <Grid display="flex" flexDirection="column">
        <Grid margin="20px 0">
          <div>
            Q8.프로젝트에서 문제가 생겼을 때 당신이 생각하는 더 나은 방법은?
          </div>
          <Button
            isTest
            isValue="G"
            _onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            문제를 해결할 수 있는 방안을 찾고 그 방안이 이끌어 낼 결과에 대해
            생각한다.
          </Button>
          <Button
            isTest
            isValue="P"
            _onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            문제가 발생한 원인을 찾고 문제 해결 과정에서 얻은 지식과 노하우에
            대해 생각한다.
          </Button>
        </Grid>
        <Grid>
          <div>
            Q8.프로젝트에서 문제가 생겼을 때 당신의 팀원이 생각했으면 하는
            방법은?
          </div>
          <Button
            isTest
            isValue="G"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            문제를 해결할 수 있는 방안을 찾고 그 방안이 이끌어 낼 결과에 대해
            생각한다.
          </Button>
          <Button
            isTest
            isValue="P"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            문제가 발생한 원인을 찾고 문제 해결 과정에서 얻은 지식과 노하우에
            대해 생각한다.
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestEight;
