// Post.js

// import를 한다.
/* eslint-disable */
import React from "react";
import styled from "styled-components";
import PostStacks from "./PostStacks";
import { useSelector, useDispatch } from "react-redux";

import { history } from "../redux/configureStore";
import { Grid, Image, Text } from "../elements/Index";

// Post의 함수형 컴포넌트를 만든다.
const Post = (props) => {
  const dispatch = useDispatch();
  const is_mainPage = useSelector((state) => state.post.mainpage);
  const [stacks, setStacks] = React.useState();
  // console.log("내가", props);
  let totalmember = props.totalMember;
  let recruitmentMember = props.recruitmentMember;
  // console.log("게시자", props.recruitmentMember);
  // console.log("메인포스트아이디", props);

  React.useEffect(() => {
    let stack = props.techStack;
    setStacks(stack);
  }, [props, is_mainPage]);

  return (
    <React.Fragment>
      <ProductImgWrap
        onClick={() => {
          history.push({
            pathname: `/postdetail/${props.postId}`,
          });
        }}
      >
        <DDescriptionBox>
          {props.projectStatus === "모집중" && (
            <>
              <CardHeaderDoing id="headerOne" className="headerOne">
                <Grid>{/* <TitleDate>D-2</TitleDate> */}</Grid>
                <Grid
                  position="relative"
                  zIndex="10"
                  display="flex"
                  width="80%"
                  margin="auto"
                >
                  {props.techStack.map((p, idx) => {
                    return (
                      <Grid width="30%" key={idx}>
                        <PostStacks stack={p}></PostStacks>
                      </Grid>
                    );
                  })}
                </Grid>
                <CardHeaderTwoDoing id="headerTwo" className="headerTwo" />
              </CardHeaderDoing>
            </>
          )}
          {props.projectStatus === "종료" && (
            <>
              <CardHeaderDone id="headerOne" className="headerOne">
                <Grid>{/* <TitleDate>D-2</TitleDate> */}</Grid>
                <Grid
                  position="relative"
                  zIndex="10"
                  display="flex"
                  width="80%"
                  margin="auto"
                >
                  {props.techStack.map((p, idx) => {
                    return (
                      <Grid width="30%" key={idx}>
                        <PostStacks stack={p}></PostStacks>
                      </Grid>
                    );
                  })}
                </Grid>
                <CardHeaderTwoDone id="headerTwo" className="headerTwo" />
              </CardHeaderDone>
            </>
          )}
          {props.projectStatus === "진행중" && (
            <>
              <CardHeaderReady id="headerOne" className="headerOne">
                <Grid>{/* <TitleDate>D-2</TitleDate> */}</Grid>
                <Grid
                  position="relative"
                  zIndex="10"
                  display="flex"
                  width="80%"
                  margin="auto"
                >
                  {props.techStack.map((p, idx) => {
                    return (
                      <Grid width="30%" key={idx}>
                        <PostStacks stack={p}></PostStacks>
                      </Grid>
                    );
                  })}
                </Grid>
                <CardHeaderTwoReady id="headerTwo" className="headerTwo" />
              </CardHeaderReady>
            </>
          )}

          <Grid
            borderRadius="64px 54px 54px 54px"
            bg="#fff"
            height="100px"
            position="absolute"
          ></Grid>
          <DescriptionBox>
            <ProjectState>{props.projectStatus}</ProjectState>
            <Title>{props.title}</Title>
            <Summary>{props.summary}</Summary>
            <Date>
              <Grid width="70%">
                {props.startDate}~{props.endDate}
              </Grid>
            </Date>
            <Line />
            <Grid display="flex" width="100%" justifyContent="space-between">
              <Grid width="100%">
                <Grid display="flex" margin="10px 0">
                  {props.projectStatus === "모집중" && (
                    <ProgressBarDoing>
                      <HighLightDoing
                        width={(recruitmentMember / totalmember) * 100 + "%"}
                      />
                    </ProgressBarDoing>
                  )}
                  {props.projectStatus === "종료" && (
                    <ProgressBarDone>
                      <HighLightDone
                        width={(recruitmentMember / totalmember) * 100 + "%"}
                      />
                    </ProgressBarDone>
                  )}
                  {props.projectStatus === "진행중" && (
                    <ProgressBarReady>
                      <HighLightReady
                        width={(recruitmentMember / totalmember) * 100 + "%"}
                      />
                    </ProgressBarReady>
                  )}

                  <Text margin="0 0 0 10px">
                    {recruitmentMember + "/" + totalmember}
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          </DescriptionBox>
        </DDescriptionBox>
      </ProductImgWrap>
    </React.Fragment>
  );
};

const DescriptionBox = styled.div`
  position: relative;
  margin: 5px 20px;
  padding: 20px;
`;
const DDescriptionBox = styled.div`
  /* background-color: #fff5f9; */
  border-radius: 54px;
  margin: auto;
  position: relative;
  height: 100%;
`;

//카드 헤더
const CardHeaderDoing = styled.div`
  position: relative;
  width: 100%;
  height: 63px;
  border-radius: 94px 84px 84px 54px;
  background-color: #ecc0f1;
`;
const CardHeaderDone = styled.div`
  position: relative;
  width: 100%;
  height: 63px;
  border-radius: 94px 84px 84px 54px;
  background-color: #49cbfd;
`;
const CardHeaderReady = styled.div`
  position: relative;
  width: 100%;
  height: 63px;
  border-radius: 94px 84px 84px 54px;
  background-color: #b29cf4;
`;

const CardHeaderTwoDoing = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 70%;
  height: 160px;
  border-radius: 43px 54px 54px 54px;
  background-color: #ecc0f1;
`;
const CardHeaderTwoDone = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 70%;
  height: 160px;
  border-radius: 43px 54px 54px 54px;
  background-color: #49cbfd;
`;
const CardHeaderTwoReady = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 70%;
  height: 160px;
  border-radius: 43px 54px 54px 54px;
  background-color: #b29cf4;
`;
//헤더 까지

const Title = styled.h1`
  margin-top: 10%;
  margin-bottom: 10px;
  font-size: 20px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606060;
`;

const Summary = styled.div`
  font-size: 12px;
  color: gray;

  /* margin-top: 8%; */
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20% auto 10px auto;
  width: 100%;
  text-overflow: ellipsis;

  @media (max-width: 750px) {
    font-size: 15px;
    margin-left: 0%;
  }
  @media (max-width: 360px) {
    font-size: 15px;
    margin-left: 0%;
  }
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid #9e9e9e;
`;

const ProjectState = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;

  background-color: #eee;
  margin: auto 0;
`;

const ProductImgWrap = styled.div`
  z-index: 1;
  position: relative;
  background-color: white;
  width: 330px;
  height: 330px;
  max-width: 350px;
  margin: 30px auto;

  border-radius: 54px 32px 35px 35px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.24);
  @media (max-width: 1700px) {
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 1300px) {
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 450px) {
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
//프로그래스바
const ProgressBarDoing = styled.div`
  border: 1px solid #ecc0f1;
  border-radius: 25px;
  background: #bb9ab6;
  width: 100%;
  height: 15px;
`;
const ProgressBarDone = styled.div`
  border: 1px solid #49cbfd;
  border-radius: 25px;
  background: #bb9ab6;
  width: 100%;
  height: 15px;
`;
const ProgressBarReady = styled.div`
  border: 1px solid #b29cf4;
  border-radius: 25px;
  background: #bb9ab6;
  width: 100%;
  height: 15px;
`;

const HighLightDoing = styled.div`
  border-radius: 25px;
  background: #ecc0f1;
  transition: 1s;
  width: ${(props) => props.width};
  height: 15px;
`;
const HighLightDone = styled.div`
  border-radius: 25px;
  background: #49cbfd;
  transition: 1s;
  width: ${(props) => props.width};
  height: 15px;
`;
const HighLightReady = styled.div`
  border-radius: 25px;
  background: #b29cf4;
  transition: 1s;
  width: ${(props) => props.width};
  height: 15px;
`;
//프로그래스바 까지

export default Post;
