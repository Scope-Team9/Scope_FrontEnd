import { Button } from "@material-ui/core";
import React from "react";
import { Grid } from "../../elements/Index";

const TestSeven = props => {
  const {
    setUserPropensityType,
    setMemberPropensityType,
    handleUserCreate,
    handleMemberCreate,
  } = props;
  return (
    <Grid>
      <Grid height="30px" bg="#007BFF">
        결과/과정 중심형 테스트
      </Grid>
      <div>성향테스트 7번</div>
      <Grid display="flex" flexDirection="column">
        <Grid>
          <div>
            Q. 어떤 문장이 당신과 더 어울리나요
            <button
              value="L"
              onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              P - 문제를 해결하는 과정에서 얻는 성취감이 있다면 보상이
              상대적으로 적더라도 만족한다.
            </button>
            <button
              value="F"
              onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              다른 사람들의 의견을 들으며 뭘 맡아서 해야할지 파악하기
            </button>
          </div>
        </Grid>
        <Grid>
          <div>Q. 어떤 문장이 당신이 선호하는 팀원의 모습과 더 어울리나요</div>
          <button
            value="L"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            G - 결과를 위해서라면 과정에서 얻을 수 있는 심리적 만족감은 조금
            내려놓을 수도 있어야 한다.
          </button>
          <button
            value="F"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            P - 문제를 해결하는 과정에서 얻는 성취감이 있다면 보상이 상대적으로
            적더라도 만족한다.
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestSeven;
