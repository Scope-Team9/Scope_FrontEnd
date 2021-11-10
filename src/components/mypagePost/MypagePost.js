// Post.js

// import를 한다.
/* eslint-disable */
import React from "react";
import styled from "styled-components";
import PostStacks from "../PostStacks";
import { useSelector, useDispatch } from "react-redux";

import { history } from "../../redux/configureStore";
import { Grid, Image } from "../../elements/Index";

// Post의 함수형 컴포넌트를 만든다.
const MypagePost = (props) => {
  const dispatch = useDispatch();
  console.log(props);

  // console.log("게시자", props.recruitmentMember);
  // console.log("메인포스트아이디", props);
  return (
    <React.Fragment>
      <ProductImgWrap
        onClick={() => {
          history.push({
            pathname: `/postdetail/${props.postId}`,
          });
        }}
      >
        <Grid backgroundColor="#E7E1FF" borderRadius="30px">
          <CardHeader>
            <Grid>{/* <TitleDate>D-2</TitleDate> */}</Grid>
            <>
              {props.techStack && (
                <Grid display="flex" width="100px">
                  {props.techStack.map((p, idx) => {
                    return <PostStacks key={idx} {...p}></PostStacks>;
                  })}
                </Grid>
              )}
            </>
          </CardHeader>
          <DescriptionBox>
            <Title>{props.title}</Title>
            <Summary>{props.summary}</Summary>
            <Date>
              {props.startDate}~{props.endDate}
            </Date>
            <Line />
            <Grid>
              <ProjectState>{props.projectStatus}</ProjectState>
            </Grid>
          </DescriptionBox>
        </Grid>
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
  margin: 30px 20px;
`;
const CardHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: #f1bad1;
  border-radius: 30px 30px 0px 0px;
  background: rgb(83, 201, 253);
  background: linear-gradient(
    140deg,
    rgba(83, 201, 253, 1) 0%,
    rgba(231, 170, 250, 1) 74%,
    rgba(231, 170, 250, 1) 100%
  );
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
  margin-left: 134px;
`;

const Line = styled.hr`
  width: 300px;
  color: black;
`;

const ProjectState = styled.div`
  margin-left: 80%;
  margin-bottom: 55px;

  @media (max-width: 750px) {
    margin-left: 60%;
  }
  @media (max-width: 370px) {
    margin-left: 60%;
  }
`;

const ProductImgWrap = styled.div`
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

export default MypagePost;
