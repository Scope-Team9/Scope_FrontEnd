/* eslint-disable */
import React from "react";
import styled from "styled-components";
import TestData from "./Testdata.json";
import { Grid, Button, Text } from "../../elements/Index";

const Test = props => {
  const { handleUserCreate, handleMemberCreate, page } = props;
  const [nowClickU, setNowClickU] = React.useState(
    TestData.userbtn.filter(btn => Number(btn.question) === page)
  );
  const [nowClickMB, setNowClickMB] = React.useState(
    TestData.memberbtn.filter(btn => Number(btn.question) === page)
  );
  const userQuestion = TestData.userquestion.filter(
    user => Number(user.question) === page
  );
  const memberQuestion = TestData.memberquestion.filter(
    member => Number(member.question) === page
  );

  const clickUser = btnUserId => {
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

  React.useLayoutEffect(() => {
    setNowClickU(TestData.userbtn.filter(btn => Number(btn.question) === page));
    setNowClickMB(
      TestData.memberbtn.filter(btn => Number(btn.question) === page)
    );
  }, [page]);
  return (
    <Grid height="100%">
      <Grid display="flex" flexDirection="column">
        {/* 나에 대한 질문 답변 */}
        <Grid margin="0 0 10px 0" height="50%">
          <Grid height="14%" margin="0 0 5px 0">
            <Grid margin="5px 0" height="14%" margin="0 0 10px 0">
              <Text bold="600">{userQuestion[0].text}</Text>
            </Grid>
          </Grid>
          {nowClickU.map(btn => (
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
        {/* 상대방에 대한 질문 답변 */}
        <Grid height="50%">
          <Grid margin="5px 0" height="14%" margin="0 0 10px 0">
            <Text bold="600">{memberQuestion[0].text}</Text>
          </Grid>
          {nowClickMB.map(btn => (
            <Grid height="38%" key={btn.id} {...btn}>
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

export default Test;
