/* eslint-disable */

import React from "react";
import { Dialog } from "@material-ui/core";
import { Grid, Image, Text, Button } from "../../elements/Index";
import PropensityTest from "../propensityTest/PropensityTest";
import styled from "styled-components";
import { map } from "lodash";

const TypeResultTest = props => {
  const [myData, setMyData] = React.useState();
  const [arr, setArr] = React.useState([
    {
      id: "LVG",
      type: "리더",
      type2: "수직",
      type3: "결과",
      text1: `리더형인 당신은 &nbsp;`,
      text2: "리더 이지만 수직적 리더십",
      text3: "을 원해요!",
      text4:
        "과정보다는 결과를 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "LVP",
      type: "리더",
      type2: "수직",
      type3: "과정",
      text1: `리더형인 당신은 &nbsp;`,
      text2: "리더 이지만 수직적 리더십",
      text3: "을 원해요!",
      text4:
        " 결과보다는 과정을 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "LHG",
      type: "리더",
      type2: "수평",
      type3: "결과",
      text1: `리더형인 당신은 &nbsp;`,
      text2: "리더 이지만 수평적 리더십",
      text3: "을 원해요!",
      text4:
        "과정보다는 결과를 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "LHP",
      type: "리더",
      type2: "수평",
      type3: "과정",
      text1: `리더형인 당신은 &nbsp;`,
      text2: "리더 이지만 수평적 리더십",
      text3: "을 원해요!",
      text4:
        "결과보다는 과정을 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "FVG",
      type: "팔로워",
      type2: "수직",
      type3: "결과",
      text1: `팔로우형 당신은 &nbsp;`,
      text2: "팔로워 이지만 수직적 팔로워십",
      text3: "을 원해요!",
      text4:
        "과정보다는 결과를 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "FVP",
      type: "팔로워",
      type2: "수직",
      type3: "과정",
      text1: `팔로우형 당신은 &nbsp;`,
      text2: "팔로워 이지만 수직적 팔로워십",
      text3: "을 원해요!",
      text4:
        "결과보다는 과정을 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "FHG",
      type: "팔로워",
      type2: "수평",
      type3: "결과",
      text1: `팔로우형 당신은 &nbsp;`,
      text2: "팔로워 이지만 수평적 팔로워십",
      text3: "을 원해요!",
      text4:
        "과정보다는 결과를 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "FHP",
      type: "팔로워",
      type2: "수평",
      type3: "과정",
      text1: `팔로우형 당신은 &nbsp;`,
      text2: "팔로워 이지만 수평적 팔로워십",
      text3: "을 원해요!",
      text4:
        "결과보다는 과정을 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "RHP",
      type: "팔로워",
      type2: "수평",
      type3: "과정",
      text1: `팔로우형 당신은 &nbsp;`,
      text2: "팔로워 이지만 수평적 팔로워십",
      text3: "을 원해요!",
      text4:
        "결과보다는 과정을 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
  ]);

  React.useEffect(() => {
    console.log("테스트결과", props);
    arr.map(item => {
      if (item.id === props.myType) {
        setMyData(item);
      }
    });
  }, []);

  return (
    <div>
      {myData && (
        <>
          <Grid
            margin="-1000px 0 0 33%"
            display="flex"
            width="50.3%"
            justifyContent="space-between"
          >
            <MyResultDiv>
              <MyResultText>{myData.type}</MyResultText>
              <MyResultText>{myData.type2}</MyResultText>
              <MyResultText>{myData.type3}</MyResultText>
            </MyResultDiv>
            {props.userId == props.myUserId &&
              props.mydata?.isMyMypage === true && (
                <Grid>
                  <GotoTest
                    onClick={() => {
                      props.EditTest();
                    }}
                  >
                    성향 테스트 다시하기⇀
                  </GotoTest>
                </Grid>
              )}
            <Dialog maxWidth={"sm"} scroll="paper" open={props.testmodal}>
              <Grid width="550px" height="100%">
                <PropensityTest TestClose={props.TestClose} />
              </Grid>
            </Dialog>
          </Grid>
          <Grid margin="0 0 0 33.5%" width="600px">
            <Grid display="flex" width="500px%">
              <MyResultText2>리더형인 당신은 &nbsp; </MyResultText2>
              <MyResultTextBold>리더 이지만 수직적 리더십</MyResultTextBold>
              <MyResultText2>을 원해요!</MyResultText2>
            </Grid>
            <Grid display="flex" width="600px">
              <MyResultText2>
                과정보다는 결과를 중요시하는 당신은 우리 스코프 사이드
                프로젝트에 적합한 사람!
              </MyResultText2>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

const MyResultDiv = styled.div`
  display: flex;
  width: auto;

  @media screen and (max-width: 1400px) {
    margin-top: 1100px;
  }
  @media screen and (max-width: 750px) {
    margin-top: 1100px;
  } ;
`;

const MyResultText = styled.div`
  width: 70px;
  height: 40px;
  border-radius: 12px;
  background-color: #b29cf4;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const GotoTest = styled.p`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  float: right;
`;
const MyResultText2 = styled.p`
  color: #707070;
  font-size: 15px;
`;
const MyResultTextBold = styled.p`
  color: black;
  font-size: 15px;
  font-weight: bold;
`;
export default TypeResultTest;
