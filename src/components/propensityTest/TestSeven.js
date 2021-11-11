import React from "react";
import { Grid, Button, Text } from "../../elements/Index";

const TestSeven = props => {
  const { handleUserCreate, handleMemberCreate } = props;
  const [nowClickU, setNowClickU] = React.useState(null);
  const [prevClickU, setPrevClickU] = React.useState(null);
  const [nowClickMB, setNowClickMB] = React.useState(null);
  const [prevClickMB, setPrevClickMB] = React.useState(null);

  const clickUser = answer => {
    setNowClickU(answer);
  };
  const clickMember = answer => {
    setNowClickMB(answer);
  };

  //유저 설문 버튼 클릭유지
  React.useEffect(
    e => {
      //값이 들어오면 해당 버튼 css 변경
      if (nowClickU !== null) {
        let current = document.getElementById(nowClickU);
        current.style.backgroundColor = "#B29CF4";
        current.style.color = "#fff";
      }
      //다른 버튼이 클릭될경우 기존 스테이트값이 이전버튼스테이트로 이동
      if (prevClickU !== null) {
        let prev = document.getElementById(prevClickU);
        prev.style.color = "#B29CF4";
        prev.style.backgroundColor = "#fff";
      }
      setPrevClickU(nowClickU);
    },
    [nowClickU]
  );

  //멤버 설문 버튼 클릭유지
  React.useEffect(
    e => {
      if (nowClickMB !== null) {
        let current = document.getElementById(nowClickMB);
        current.style.backgroundColor = "#B29CF4";
        current.style.color = "#fff";
      }

      if (prevClickMB !== null) {
        let prev = document.getElementById(prevClickMB);
        prev.style.color = "#B29CF4";
        prev.style.backgroundColor = "#fff";
      }
      setPrevClickMB(nowClickMB);
    },
    [nowClickMB]
  );
  return (
    <Grid>
      <Grid display="flex" flexDirection="column">
        <Grid margin="20px 0">
          <Grid>
            Q. 어떤 문장이 당신과 더 어울리나요
            <Button
              isTest
              isId="UP"
              isValue="P"
              _onClick={e => {
                clickUser(e.target.id);
                handleUserCreate(e.target.value);
              }}
            >
              문제를 해결하는 과정에서 얻는 성취감이 있다면 보상이 상대적으로
              적더라도 만족한다.
            </Button>
            <Button
              isTest
              isId="UG"
              isValue="G"
              _onClick={e => {
                clickUser(e.target.id);
                handleUserCreate(e.target.value);
              }}
            >
              결과를 위해서라면 과정에서 얻을 수 있는 심리적 만족감은 조금
              내려놓을 수도 있어야 한다.
            </Button>
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            Q. 어떤 문장이 당신이 선호하는 팀원의 모습과 더 어울리나요
          </Grid>
          <Button
            isTest
            isId="MG"
            isValue="G"
            _onClick={e => {
              clickMember(e.target.id);
              handleMemberCreate(e.target.value);
            }}
          >
            결과를 위해서라면 과정에서 얻을 수 있는 심리적 만족감은 조금
            내려놓을 수도 있어야 한다.
          </Button>
          <Button
            isTest
            isId="MP"
            isValue="P"
            _onClick={e => {
              clickMember(e.target.id);
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
