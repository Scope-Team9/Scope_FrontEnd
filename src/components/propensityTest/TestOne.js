import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "../../elements/Index";

const TestOne = props => {
  const { handleUserCreate, handleMemberCreate } = props;
  const [nowClickU, setNowClickU] = React.useState(null);
  const [prevClickU, setPrevClickU] = React.useState(null);
  const [nowClickMB, setNowClickMB] = React.useState(null);
  const [prevClickMB, setPrevClickMB] = React.useState(null);

  const clickUser = answer => {
    console.log(answer);
    setNowClickU(answer);
  };
  const clickMember = answer => {
    console.log(answer);
    setNowClickMB(answer);
  };

  React.useEffect(
    e => {
      if (nowClickU !== null) {
        let current = document.getElementById(nowClickU);
        console.log(current);
        current.style.backgroundColor = "#B29CF4";
        current.style.color = "#fff";
      }

      if (prevClickU !== null) {
        let prev = document.getElementById(prevClickU);
        prev.style.color = "#B29CF4";
        prev.style.backgroundColor = "#fff";
      }
      setPrevClickU(nowClickU);
    },
    [nowClickU]
  );

  React.useEffect(
    e => {
      if (nowClickMB !== null) {
        let current = document.getElementById(nowClickMB);
        console.log(current);
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
            <Grid margin="5px 0">
              Q1.<b>팀 회의할 때 당신의 모습</b>에 더 가까운 것은?
            </Grid>
            <Button
              isId="UL"
              isValue="L"
              isTest
              _onClick={e => {
                console.log(e);
                clickUser(e.target.id);
                handleUserCreate(e.target.value);
              }}
            >
              내 주장을 펼치며 회의 분위기를 탄탄하게 이끌기
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
              다른 사람들의 의견을 들으며 뭘 맡아서 해야할지 파악하기
            </Button>
          </Grid>
        </Grid>
        <Grid>
          <Grid margin="5px 0">
            Q1.<b>팀 회의할 때 선호하는 팀원의 모습</b>에 더 가까운 것은?
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
            내 주장을 펼치며 회의 분위기를 탄탄하게 이끌기
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
            다른 사람들의 의견을 들으며 뭘 맡아서 해야할지 파악하기
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestOne;
