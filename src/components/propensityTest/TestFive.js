import React from "react";
import { Grid, Button, Text } from "../../elements/Index";

const TestFive = props => {
  const { handleUserCreate, handleMemberCreate } = props;

  return (
    <Grid>
      <Grid display="flex" flexDirection="column">
        <Grid margin="20px 0">
          <div>Q5.당신이 생각하는 이상적인 회의의 모습은?</div>
          <Button
            isTest
            isValue="V"
            _onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            능력에 따른 적절한 권한의 분배 하에 진행되는 회의
          </Button>
          <Button
            isTest
            isValue="H"
            _onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            모두 동등한 권한을 가지고 진행되는 회의
          </Button>
        </Grid>
        <Grid>
          <Grid>Q5.당신의 팀원이 원했으면 하는 이상적인 회의의 모습은?</Grid>
          <Button
            isTest
            isValue="V"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            V. 능력에 따른 적절한 권한의 분배 하에 진행되는 회의
          </Button>
          <Button
            isTest
            isValue="H"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            H. 모두 동등한 권한을 가지고 진행되는 회의
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestFive;
