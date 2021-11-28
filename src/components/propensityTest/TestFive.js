/* eslint-disable */
import React from "react";
import TestData from "./Testdata.json";
import { Grid, Button, Text } from "../../elements/Index";

const TestFive = props => {
  const { handleUserCreate, handleMemberCreate } = props;
  const [nowClickU, setNowClickU] = React.useState(
    TestData.userbtn.filter(btn => btn.question === "Q5")
  );
  const [nowClickMB, setNowClickMB] = React.useState(
    TestData.memberbtn.filter(btn => btn.question === "Q5")
  );

  const clickUser = btnUserId => {
    // console.log(btnUserId);
    setNowClickU(state => {
      return state.map(stateItem => {
        if (stateItem.id === btnUserId) {
          return { ...stateItem, active: !stateItem.active };
        }
        return stateItem;
      });
    });
    setNowClickU(state => {
      return state.map(stateItem => {
        if (stateItem.id !== btnUserId && stateItem.active === true) {
          return { ...stateItem, active: !stateItem.active };
        }
        return stateItem;
      });
    });
  };

  const clickMember = btnMemberId => {
    setNowClickMB(state => {
      return state.map((stateItem, idx) => {
        if (stateItem.id === btnMemberId) {
          return { ...stateItem, active: !stateItem.active };
        }
        return stateItem;
      });
    });
    setNowClickMB(state => {
      return state.map(stateItem => {
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
          <Grid margin="0 0 10px 0" height="14%">
            Q5.<b>당신</b>이 생각하는 <b>이상적인 회의</b>의 모습은?
          </Grid>
          {nowClickU.map((btn, idx) => (
            <Grid height="38%" key={btn.id} {...btn}>
              <Button
                isId={btn.id}
                isValue={btn.value}
                isTest
                text={btn.text}
                isActive={btn.active}
                _onClick={e => {
                  clickUser(e.target.id);
                  handleUserCreate(e.target.value);
                }}
              ></Button>
            </Grid>
          ))}
        </Grid>
        <Grid height="50%">
          <Grid margin="5px 0" height="14%" margin="0 0 10px 0">
            Q5.당신의 <b>팀원이 원했으면 하는 이상적인 회의</b>의 모습은?
          </Grid>
          {nowClickMB.map((btn, idx) => (
            <Grid height="35%" key={btn.id} {...btn}>
              <Button
                isId={btn.id}
                isValue={btn.value}
                isTest
                text={btn.text}
                isActive={btn.active}
                _onClick={e => {
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

export default TestFive;
