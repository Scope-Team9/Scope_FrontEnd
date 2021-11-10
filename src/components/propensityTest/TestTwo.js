import React from "react";
import { Grid, Button, Text } from "../../elements/Index";

const TestTwo = props => {
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
            Q2. 새로운 스터디 사람들과의 첫만남! 스터디의 운영을 맡길 스터디
            장을 뽑아야 하는데 이때 당신의 행동은?
          </Grid>
          <Button
            isId="UL"
            isTest
            isValue="L"
            _onClick={e => {
              clickUser(e.target.id);
              handleUserCreate(e.target.value);
            }}
          >
            스터디를 어떻게 운영할지 잠깐 생각해보고 스터디장을 맡아서 진행한다.
          </Button>
          <Button
            isTest
            isId="UF"
            isValue="F"
            _onClick={e => {
              clickUser(e.target.id);
              handleUserCreate(e.target.value);
            }}
          >
            누가 스터디를 잘 이끌 사람인지 살핀다.
          </Button>
        </Grid>
        <Grid>
          <Grid>
            Q2. 새로운 스터디 사람들과의 첫만남! 스터디의 운영을 맡길 스터디
            장을 뽑아야 하는데 이때 당신이 선호하는 팀원의 행동은?
          </Grid>
          <Button
            isTest
            isId="ML"
            isValue="L"
            _onClick={e => {
              clickMember(e.target.id);
              handleMemberCreate(e.target.value);
            }}
          >
            스터디를 어떻게 운영할지 잠깐 생각해보고 스터디장을 맡아서 진행한다.
          </Button>
          <Button
            isTest
            isId="MF"
            isValue="F"
            _onClick={e => {
              clickMember(e.target.id);
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
