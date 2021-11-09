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
const Post = props => {
  const dispatch = useDispatch();
  const is_mainPage = useSelector(state => state.post.mainpage);
  const [stacks, setStacks] = React.useState();
  console.log(props.totalMember);
  console.log(props.recruitmentMember);

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
          <CardHeader>
            <Grid>{/* <TitleDate>D-2</TitleDate> */}</Grid>

            <Grid display="flex" width="100%">
              {props.techStack.map((p, idx) => {
                return (
                  <div style={{ width: "22%" }} key={idx}>
                    <PostStacks stack={p}></PostStacks>
                  </div>
                );
              })}
            </Grid>
            <CardHeaderTwo />
          </CardHeader>
          <Grid
            borderRadius="50px 30px 30px 30px"
            bg="#fff"
            height="260px"
            position="absolute"
          ></Grid>
          <DescriptionBox>
            <ProjectState>{props.projectStatus}</ProjectState>
            <Title>{props.title}</Title>
            <Summary>{props.summary}</Summary>
            <Date>
              {props.startDate}~{props.endDate}
            </Date>
            <Line />
            <Grid display="flex" width="100%" justifyContent="space-between">
              <Grid width="100%">
                <Grid display="flex">
                  <ProgressBar>
                    <HighLight
                      width={(recruitmentMember / totalmember) * 100 + "%"}
                    />
                  </ProgressBar>
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

const TitleDate = styled.div`
  width: 50px;
  text-align: center;
  border-radius: 10px;
  color: black;
  background-color: white;
  margin-left: 280px;
`;

const DescriptionBox = styled.div`
  position: relative;
  margin: 30px 20px;
`;
const DDescriptionBox = styled.div`
  /* background-color: #fff5f9; */
  border-radius: 30px;
  margin: auto;
  position: relative;
  height: 100%;
`;

const CardHeader = styled.div`
  z-index: -9;
  position: relative;
  width: 100%;
  height: 70px;
  background-color: #f1bad1;
  border-radius: 30px 30px 30px 0px;
  background: rgb(83, 201, 253);
  background: linear-gradient(
    140deg,
    rgba(83, 201, 253, 1) 0%,
    rgba(231, 170, 250, 1) 74%,
    rgba(231, 170, 250, 1) 100%
  );
`;

const CardHeaderTwo = styled.div`
  z-index: -8;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 70%;
  height: 160px;
  background-color: #f1bad1;
  border-radius: 30px 30px 30px 0px;
  background: rgb(83, 201, 253);
  background: linear-gradient(
    140deg,
    rgba(83, 201, 253, 1) 0%,
    rgba(231, 170, 250, 1) 74%,
    rgba(231, 170, 250, 1) 100%
  );
`;
const ContentBox = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 30px 0 30px 0px;
  width: 100%;
  z-z-index: 999;
`;

const Title = styled.h1`
  margin-top: 15%;
  font-size: 20px;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606060;
`;

const Summary = styled.div`
  font-size: 17px;
  color: gray;

  margin-top: 8%;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  margin-top: 15%;
  margin-left: 50%;
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
  color: black;
`;

const ProjectState = styled.div`
  position: absolute;
  top: -10px;
  right: 0px;

  background-color: #eee;
  margin: auto 0;
  /* margin-left: 80%;
  margin-bottom: 55px; */

  @media (max-width: 750px) {
    margin-left: 60%;
  }
  @media (max-width: 370px) {
    margin-left: 60%;
  }
`;

const ProductImgWrap = styled.div`
  z-index: -10;
  background-color: white;
  width: 80vw;
  height: 80%;
  max-width: 350px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 30px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.24);
  @media (max-width: 1700px) {
    width: 400px;
    height: 80%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 1200px) {
    width: 300px;
    height: 80%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 450px) {
    width: 300px;
    height: 280px;
    margin: auto;
    margin-left: 1%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const ProgressBar = styled.div`
  border: 3px solid #b29cf4;
  border-radius: 25px;
  background: #f1f9ff;
  width: 100%;
  height: 15px;
`;

const HighLight = styled.div`
  border-radius: 25px;
  background: #b29cf4;
  transition: 1s;
  width: ${props => props.width};
  height: 15px;
`;

export default Post;
