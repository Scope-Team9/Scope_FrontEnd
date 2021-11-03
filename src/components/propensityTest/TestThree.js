import React from "react";
import { Grid, Button } from "../../elements/Index";

const TestThree = props => {
  const { handleUserCreate, handleMemberCreate } = props;
  return (
    <Grid>
      <div>성향테스트 3번</div>
      <Grid display="flex" flexDirection="column">
        <Grid>
          <div>
            Q3. 나는 큰 보상과 무거운 책임보다는 평범한 보상과 책임이 더 좋다.
            <button
              value="L"
              onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              X
            </button>
            <button
              value="F"
              onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              O
            </button>
          </div>
        </Grid>
        <Grid>
          <div>
            Q3. 내 팀원은 큰 보상과 무거운 책임보다는 평범한 보상과 책임을 더
            좋아했으면 좋겠다.
          </div>
          <button
            value="L"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            X
          </button>
          <button
            value="F"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            O
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestThree;
