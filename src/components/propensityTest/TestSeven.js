import React from "react";
import { Grid, Button, Text } from "../../elements/Index";

const TestSeven = props => {
  const { handleUserCreate, handleMemberCreate } = props;
  return (
    <Grid>
      <Grid height="30px" bg="#dddddd" textAlign="center">
        <Text>결과/과정 중심형 테스트 #1</Text>
      </Grid>
      <Grid display="flex" flexDirection="column">
        <Grid margin="20px 0">
          <div>
            Q. 어떤 문장이 당신과 더 어울리나요
            <Button
              isTest
              isValue="P"
              _onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              문제를 해결하는 과정에서 얻는 성취감이 있다면 보상이 상대적으로
              적더라도 만족한다.
            </Button>
            <Button
              isTest
              isValue="G"
              _onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              결과를 위해서라면 과정에서 얻을 수 있는 심리적 만족감은 조금
              내려놓을 수도 있어야 한다.
            </Button>
          </div>
        </Grid>
        <Grid>
          <div>Q. 어떤 문장이 당신이 선호하는 팀원의 모습과 더 어울리나요</div>
          <Button
            isTest
            isValue="G"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            결과를 위해서라면 과정에서 얻을 수 있는 심리적 만족감은 조금
            내려놓을 수도 있어야 한다.
          </Button>
          <Button
            isTest
            isValue="P"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            문제를 해결하는 과정에서 얻는 성취감이 있다면 보상이 상대적으로
            적더라도 만족한다.
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestSeven;
