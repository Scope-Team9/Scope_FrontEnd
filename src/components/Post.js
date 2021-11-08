// Post.js

// import를 한다.
/* eslint-disable */
import React from "react";
import styled from "styled-components";
import PostStacks from "./PostStacks";
import { useSelector, useDispatch } from "react-redux";

import { history } from "../redux/configureStore";
import { Grid, Image } from "../elements/Index";

// Post의 함수형 컴포넌트를 만든다.
const Post = (props) => {
  const dispatch = useDispatch();

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
          <Grid
            width="350px"
            height="50px"
            backgroundColor="#8B3FF8"
            borderRadius="20px 20px 20px 0px"
          >
            <Grid>{/* <TitleDate>D-2</TitleDate> */}</Grid>

            <Grid display="flex" width="100px">
              {props.techStack.map((p, idx) => {
                return (
                  <div key={idx}>
                    <PostStacks stack={p}></PostStacks>
                  </div>
                );
              })}
            </Grid>
          </Grid>
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

const Title = styled.h1`
  font-size: 20px;
`;

const Summary = styled.div`
  font-size: 14px;
  color: gray;
  margin-bottom: 80px;
`;

const Date = styled.div`
  margin-left: 134px;
`;

const Line = styled.hr`
  width: 300px;
  color: black;
`;

const ProjectState = styled.div`
  margin-left: 260px;
  margin-bottom: 10px;
`;

const ProductImgWrap = styled.div`
  background-color: white;
  width: 60vw;
  max-width: 350px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 30px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.24);
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export default Post;
