/* eslint-disable */
import React from "react";
import TestData from "./Testdata.json";
import { Grid, Button, Text } from "../../elements/Index";

const TestSeven = (props) => {
  const { handleUserCreate, handleMemberCreate } = props;
  const [nowClickU, setNowClickU] = React.useState(
    TestData.userbtn.filter((btn) => btn.question === "Q7")
  );
  const [nowClickMB, setNowClickMB] = React.useState(
    TestData.memberbtn.filter((btn) => btn.question === "Q7")
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
            Q. <b>당신과 어울리는 문장</b>은 무엇인가요?
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
        </Grid>
        <Grid>
          <Grid>
            Q. 어떤 문장이 <b>당신이 선호하는 팀원의 모습</b>과 더 어울리나요?
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

export default TestSeven;
