import React from "react";
import { Grid, Button, Text } from "../../elements/Index";

const TestFour = props => {
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
        prev.style.color = "#B25544759CF4";
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
            Q4.<b>프로젝트를 진행</b>함에 있어서 <b>당신의 생각</b>에 더 가까운
            문장은?
          </Grid>
          <Button
            isTest
            isId="UV"
            isValue="V"
            _onClick={e => {
              clickUser(e.target.id);
              handleUserCreate(e.target.value);
            }}
          >
            팀장의 존재는 프로젝트를 진행함에 있어 필수적이다.
          </Button>
          <Button
            isTest
            isId="UH"
            isValue="H"
            _onClick={e => {
              clickUser(e.target.id);
              handleUserCreate(e.target.value);
            }}
          >
            소통이 원활하게만 잘 된다면 팀장이 없어도 문제없이 프로젝트를 진행할
            수 있다.
          </Button>
        </Grid>
        <Grid>
          <Grid>
            Q4.<b>프로젝트를 진행</b>함에 있어서 당신이 원하는{" "}
            <b>팀원의 생각</b>에 더 가까웠으면 하는 문장은?
          </Grid>
          <Button
            isTest
            isId="MV"
            isValue="V"
            _onClick={e => {
              clickMember(e.target.id);
              handleMemberCreate(e.target.value);
            }}
          >
            팀장의 존재는 프로젝트를 진행함에 있어 필수적이다.
          </Button>
          <Button
            isTest
            isId="MH"
            isValue="H"
            _onClick={e => {
              clickMember(e.target.id);
              handleMemberCreate(e.target.value);
            }}
          >
            소통이 원활하게만 잘 된다면 팀장이 없어도 문제없이 프로젝트를 진행할
            수 있다.
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestFour;
