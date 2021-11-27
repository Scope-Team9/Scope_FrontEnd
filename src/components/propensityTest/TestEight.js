/* eslint-disable */
import React from "react";
import TestData from "./Testdata.json";
import { Grid, Button, Text } from "../../elements/Index";

const TestEight = (props) => {
  const { handleUserCreate, handleMemberCreate } = props;
  const [nowClickU, setNowClickU] = React.useState(
    TestData.userbtn.filter((btn) => btn.question === "Q8")
  );
  const [nowClickMB, setNowClickMB] = React.useState(
    TestData.memberbtn.filter((btn) => btn.question === "Q8")
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
    <Grid>
      <Grid display="flex" flexDirection="column">
        <Grid margin="20px 0">
          <Grid>
            Q8.<b>프로젝트에서 문제</b>가 생겼을 때{" "}
            <b>당신이 생각하는 더 나은 방법</b>은?
          </Grid>
          {nowClickU.map((btn, idx) => (
            <Grid key={btn.id} {...btn}>
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
        <Grid>
          <Grid>
            Q8.<b>프로젝트에서 문제</b>가 생겼을 때{" "}
            <b>당신의 팀원이 생각했으면 하는 방법</b>은?
          </Grid>
          {nowClickMB.map((btn, idx) => (
            <Grid key={btn.id} {...btn}>
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

export default TestEight;
