import React from "react";
import { Grid, Button } from "../../elements/Index";

const TestTwo = props => {
  const { handleUserCreate, handleMemberCreate } = props;

  return (
    <Grid>
      <div>성향테스트 2번</div>
      <Grid display="flex" flexDirection="column">
        <Grid>
          <div>
            Q1. 새로운 스터디 사람들과의 첫만남! 스터디의 운영을 맡길 스터디
            장을 뽑아야 하는데 이때 당신의 행동은?
          </div>
          <button
            value="L"
            onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            L - 스터디를 어떻게 운영할지 잠깐 생각해보고 스터디장을 맡아서
            진행한다.
          </button>
          <button
            value="F"
            onClick={e => {
              handleUserCreate(e.target.value);
            }}
          >
            F - 누가 스터디를 잘 이끌 사람인지 살핀다.
          </button>
        </Grid>
        <Grid>
          <div>
            Q1. 새로운 스터디 사람들과의 첫만남! 스터디의 운영을 맡길 스터디
            장을 뽑아야 하는데 이때 당신의 행동은?
          </div>
          <button
            value="F"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            L - 스터디를 어떻게 운영할지 잠깐 생각해보고 스터디장을 맡아서
            진행한다.
          </button>
          <button
            value="L"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            F - 누가 스터디를 잘 이끌 사람인지 살핀다.
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestTwo;
