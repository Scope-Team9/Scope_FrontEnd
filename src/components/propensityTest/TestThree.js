import React from "react";
import { Grid, Button, Text } from "../../elements/Index";

const TestThree = props => {
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
        current.style.backgroundColor = "#554475";
        current.style.color = "#fff";
      }
      //다른 버튼이 클릭될경우 기존 스테이트값이 이전버튼스테이트로 이동
      if (prevClickU !== null) {
        let prev = document.getElementById(prevClickU);
        prev.style.color = "#554475";
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
        current.style.backgroundColor = "#554475";
        current.style.color = "#fff";
      }

      if (prevClickMB !== null) {
        let prev = document.getElementById(prevClickMB);
        prev.style.color = "#554475";
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
            Q3. <b>나는 큰 보상과 무거운 책임</b>보다는{" "}
            <b>평범한 보상과 책임</b>이 더 좋다.
            <Button
              isId="UF"
              isTest
              isValue="F"
              _onClick={e => {
                clickUser(e.target.id);
                handleUserCreate(e.target.value);
              }}
            >
              평범한 보상과 평범한 책임
            </Button>
            <Button
              isId="UL"
              isTest
              isValue="L"
              _onClick={e => {
                clickUser(e.target.id);
                handleUserCreate(e.target.value);
              }}
            >
              큰 보상과 무거운책임
            </Button>
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            Q3. <b>내 팀원은 큰 보상과 무거운 책임</b>보다는{" "}
            <b>평범한 보상과 책임을 더 좋아했으면</b> 좋겠다.
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
            큰 보상과 무거운책임
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
            평범한 보상과 평범한 책임
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestThree;
