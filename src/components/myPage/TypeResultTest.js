/* eslint-disable */

import React from "react";
import { Dialog } from "@material-ui/core";
import { Grid, Image, Text, Button } from "../../elements/Index";
import PropensityTest from "../propensityTest/PropensityTest";
import styled from "styled-components";
import { map, stubFalse } from "lodash";
import { Grid4x4 } from "@mui/icons-material";
import EmailAuth from "../EmailAuth";

const TypeResultTest = (props) => {
  const [myData, setMyData] = React.useState();
  const [arr, setArr] = React.useState([
    {
      id: "LVG",
      name: "호랑이",
      type: "리더",
      type2: "수직",
      type3: "결과",
      text1: `리더형인 당신은 `,
      text2: "리더 이지만 수직적 리더십",
      text3: "을 원해요!",
      text4:
        "과정보다는 결과를 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "LVP",
      name: "늑대",
      type: "리더",
      type2: "수직",
      type3: "과정",
      text1: `리더형인 당신은 `,
      text2: "리더 이지만 수직적 리더십",
      text3: "을 원해요!",
      text4:
        " 결과보다는 과정을 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "LHG",
      name: "여우",
      type: "리더",
      type2: "수평",
      type3: "결과",
      text1: `리더형인 당신은 `,
      text2: "리더 이지만 수평적 리더십",
      text3: "을 원해요!",
      text4:
        "과정보다는 결과를 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "LHP",
      name: "팬더",
      type: "리더",
      type2: "수평",
      type3: "과정",
      text1: `리더형인 당신은 `,
      text2: "리더 이지만 수평적 리더십",
      text3: "을 원해요!",
      text4:
        "결과보다는 과정을 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "FVG",
      name: "토끼",
      type: "팔로워",
      type2: "수직",
      type3: "결과",
      text1: `팔로우형 당신은 `,
      text2: "팔로워 이지만 수직적 팔로워십",
      text3: "을 원해요!",
      text4:
        "과정보다는 결과를 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "FVP",
      name: "강아지",
      type: "팔로워",
      type2: "수직",
      type3: "과정",
      text1: `팔로우형 당신은 `,
      text2: "팔로워 이지만 수직적 팔로워십",
      text3: "을 원해요!",
      text4:
        "결과보다는 과정을 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "FHG",
      name: "고양이",
      type: "팔로워",
      type2: "수평",
      type3: "결과",
      text1: `팔로우형 당신은 `,
      text2: "팔로워 이지만 수평적 팔로워십",
      text3: "을 원해요!",
      text4:
        "과정보다는 결과를 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "FHP",
      name: "물개",
      type: "팔로워",
      type2: "수평",
      type3: "과정",
      text1: `팔로우형 당신은 `,
      text2: "팔로워 이지만 수평적 팔로워십",
      text3: "을 원해요!",
      text4:
        "결과보다는 과정을 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
    {
      id: "RHP",
      name: "너구리",
      type: "팔로워",
      type2: "수평",
      type3: "과정",
      text1: `팔로우형 당신은 `,
      text2: "팔로워 이지만 수평적 팔로워십",
      text3: "을 원해요!",
      text4:
        "결과보다는 과정을 중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!",
    },
  ]);

  React.useEffect(() => {
    // console.log("테스트결과", props);
    arr.map((item) => {
      if (item.id === props.myType) {
        setMyData(item);
      }
    });
  }, []);

  return (
    <Wrap>
      {myData && (
        <Grid
          zIndex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          margin="auto"
        >
          <Grid
            display="flex"
            // border="1px solid #333"
            borderRadius="15px"
            height="1%"
          >
            <MyResultDiv>
              <MyResultText>#{myData.type}</MyResultText>
              <MyResultText>#{myData.type2}</MyResultText>
              <MyResultText>#{myData.type3}</MyResultText>
            </MyResultDiv>
          </Grid>
          <Grid height="23%">
            <WhiteP>
              {myData.id} / {myData.name}
            </WhiteP>
          </Grid>

          <Grid margin="0 0 0 20px" height="11%">
            <Grid display="flex" height="80%">
              <MyResultText2>{myData.text1}</MyResultText2>
              <MyResultTextBold>{myData.text2}</MyResultTextBold>
              <MyResultText2>{myData.text3}</MyResultText2>
            </Grid>
            <Grid display="flex">
              <MyResultText2>{myData.text4}</MyResultText2>
            </Grid>
            {props.userId == props.myUserId &&
              props.mydata?.isMyMypage === true && (
                <Grid
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  height="100%"
                  position="relative"
                  margin="15px 0 0 0"
                  width="100%"
                  maxWidth="1150px"
                >
                  <GotoTest
                    onClick={() => {
                      props.EditTest();
                    }}
                  >
                    성향 테스트 다시하기⇀
                  </GotoTest>

                  <ConfirmEmail
                    onClick={() => {
                      props.onClick();
                    }}
                  >
                    이메일 인증하기
                  </ConfirmEmail>
                  <EmailAuth
                    modal={props.modal}
                    setModal={props.setModal}
                  ></EmailAuth>
                </Grid>
              )}
            <Dialog scroll="paper" open={props.testmodal}>
              <TestWrap>
                <PropensityTest TestClose={props.TestClose} />
              </TestWrap>
            </Dialog>
          </Grid>
        </Grid>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100%;
  width: 60vw;
  margin-left: 30%;
  @media screen and (max-width: 1600px) {
    margin-left: 34%;
  }

  @media screen and (max-width: 1200px) {
    width: 90vw;
    margin: auto;
  }
  @media screen and (max-width: 750px) {
    width: 90vw;
    margin: auto;
  } ;
`;
const MyResultDiv = styled.div`
  display: flex;
  width: auto;
  align-items: center;
`;

const MyResultText = styled.div`
  width: auto;
  height: 32px;

  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const GotoTest = styled.p`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  /* float: right; */
  margin-right: 10px;
  margin-top: 30px;
  position: relative;
  z-index: 999;
  @media screen and (max-width: 370px) {
    font-size: 12px;
  } ;
`;
const MyResultText2 = styled.p`
  color: white;
  font-size: 17px;
  height: 17px;
  width: auto;
  @media screen and (max-width: 670px) {
    display: none;
  } ;
`;
const MyResultTextBold = styled.p`
  color: white;
  font-size: 17px;
  height: 17px;
  font-weight: bold;
`;

const ConfirmEmail = styled.button`
  width: 160px;
  height: 35px;
  padding: 8px 20px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  border-radius: 10px;
  z-index: 1;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: white;
    opacity: 0.7;
  }

  @media screen and (max-width: 750px) {
    color: black;
  } ;
`;

const WhiteP = styled.p`
  font-size: 30px;
  color: white;
  font-weight: bold;
  width: 300px;
  margin-left: 13px;
`;

const TestWrap = styled.div`
  height: 100%;
  width: 550px;

  @media (max-width: 650px) {
    width: 310px;
    height: 550px;
    font-size: 11px;
  }
`;
export default TypeResultTest;
