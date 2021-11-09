import React from "react";
import { Grid, Button, Text } from "../../elements/Index";

const TestTwo = props => {
  const { handleUserCreate, handleMemberCreate, ToggleButton } = props;

  return (
    <Grid>
      <Grid display="flex" flexDirection="column">
        <Grid margin="20px 0">
          <Grid>
            Q2. 새로운 스터디 사람들과의 첫만남! 스터디의 운영을 맡길 스터디
            장을 뽑아야 하는데 이때 당신의 행동은?
          </Grid>
          <Button
            isTest
            isValue="L"
            _onClick={e => {
              ToggleButton();
              handleUserCreate(e.target.value);
            }}
          >
            스터디를 어떻게 운영할지 잠깐 생각해보고 스터디장을 맡아서 진행한다.
          </Button>
          <Button
            isTest
            isValue="F"
            _onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            누가 스터디를 잘 이끌 사람인지 살핀다.
          </Button>
        </Grid>
        <Grid>
          <div>
            Q2. 새로운 스터디 사람들과의 첫만남! 스터디의 운영을 맡길 스터디
            장을 뽑아야 하는데 이때 당신이 선호하는 팀원의 행동은?
          </div>
          <Button
            isTest
            isValue="L"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            스터디를 어떻게 운영할지 잠깐 생각해보고 스터디장을 맡아서 진행한다.
          </Button>
          <Button
            isTest
            isValue="F"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            누가 스터디를 잘 이끌 사람인지 살핀다.
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestTwo;
