/* eslint-disable */
import React from "react";
import TestData from "./Testdata.json";
import { Grid, Button, Text } from "../../elements/Index";
import styled from "styled-components";
const TestOne = (props) => {
  const { handleUserCreate, handleMemberCreate } = props;
  const [nowClickU, setNowClickU] = React.useState(
    TestData.userbtn.filter((btn) => btn.question === "Q1")
  );
  const [nowClickMB, setNowClickMB] = React.useState(
    TestData.memberbtn.filter((btn) => btn.question === "Q1")
  );

  const clickUser = (btnUserId) => {
    // console.log(btnUserId);
    setNowClickU((state) => {
      return state.map((stateItem) => {
        if (stateItem.id === btnUserId) {
          return { ...stateItem, active: !stateItem.active };
        }
        return stateItem;
      });
    });
    setNowClickU((state) => {
      return state.map((stateItem) => {
        if (stateItem.id !== btnUserId && stateItem.active === true) {
          return { ...stateItem, active: !stateItem.active };
        }
        return stateItem;
      });
    });
  };

  const clickMember = (btnMemberId) => {
    setNowClickMB((state) => {
      return state.map((stateItem, idx) => {
        if (stateItem.id === btnMemberId) {
          return { ...stateItem, active: !stateItem.active };
        }
        return stateItem;
      });
    });
    setNowClickMB((state) => {
      return state.map((stateItem) => {
        if (stateItem.id !== btnMemberId && stateItem.active === true) {
          return { ...stateItem, active: !stateItem.active };
        }
        return stateItem;
      });
    });
  };

  return (
    <Grid height="100%">
      <Grid display="flex" flexDirection="column">
        <Grid margin="0 0 10px 0" height="50%">
          <Grid height="14%" margin="0 0 5px 0">
            <Grid margin="5px 0" height="14%" margin="0 0 10px 0">
              Q1. <b>팀 회의할 때 당신의 모습</b>에 더 가까운 것은?
            </Grid>
          </Grid>
          {nowClickU.map((btn, idx) => (
            <Grid height="38%" key={btn.id} {...btn}>
              <Button
                isId={btn.id}
                isValue={btn.value}
                isTest
                text={btn.text}
                isActive={btn.active}
                _onClick={(e) => {
                  clickUser(e.target.id);
                  handleUserCreate(e.target.value);
                }}
              ></Button>
            </Grid>
          ))}
        </Grid>

        <Grid height="50%">
          <Grid margin="5px 0" height="14%" margin="0 0 10px 0">
            Q1. <b>팀 회의할 때 선호하는 팀원의 모습</b>에 더 가까운 것은?
          </Grid>
          {nowClickMB.map((btn, idx) => (
            <Grid height="38%" key={btn.id} {...btn}>
              <Button
                isId={btn.id}
                isValue={btn.value}
                isTest
                text={btn.text}
                isActive={btn.active}
                _onClick={(e) => {
                  clickMember(e.target.id);
                  handleMemberCreate(e.target.value);
                }}
              ></Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

const Q1 = styled.p`
  margin: 0 0 5px 0;
  height: 14%;
  @media screen and (max-width: 375px) {
    font-size: 10px;
  }
`;
export default TestOne;
