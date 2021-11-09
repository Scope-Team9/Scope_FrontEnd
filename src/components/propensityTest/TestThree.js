import React from "react";
import { Grid, Button, Text } from "../../elements/Index";

const TestThree = props => {
  const { handleUserCreate, handleMemberCreate } = props;
  return (
    <Grid>
      <Grid height="30px" bg="#dddddd" textAlign="center">
        <Text>리더형/팔로워형 테스트 #3</Text>
      </Grid>
      <Grid display="flex" flexDirection="column">
        <Grid margin="20px 0">
          <Grid>
            Q3. 나는 큰 보상과 무거운 책임보다는 평범한 보상과 책임이 더 좋다.
            <Button
              isTest
              isValue="L"
              _onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              평범한 보상과 평범한 책임
            </Button>
            <Button
              isTest
              isValue="F"
              _onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              큰 보상과 무거운책임
            </Button>
          </Grid>
        </Grid>
        <Grid>
          <div>
            Q3. <b>내 팀원</b>은 큰 보상과 무거운 책임보다는 평범한 보상과
            책임을 더 좋아했으면 좋겠다.
          </div>
          <Button
            isTest
            isValue="L"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            큰 보상과 무거운책임
          </Button>
          <Button
            isTest
            isValue="F"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            평범한 보상과 평범한 책임
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestThree;
