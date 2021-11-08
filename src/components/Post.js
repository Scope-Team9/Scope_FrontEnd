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
  const is_mainPage = useSelector((state) => state.post.mainpage);
  const [stacks, setStacks] = React.useState();
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
        <Grid backgroundColor="#D7D4E6" borderRadius="30px" margin="auto">
          <Grid
            width="100%"
            height="50px"
            backgroundColor="#170184"
            borderRadius="30px 30px 30px 0px"
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
  margin-top: 15%;
  font-size: 20px;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Summary = styled.div`
  font-size: 14px;
  color: gray;

  margin-top: 15%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 14px;
  max-height: 28px;
  -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
  -webkit-box-orient: vertical;
`;

const Date = styled.div`
  margin-top: 25%;
  margin-left: 50%;
  text-overflow: ellipsis;
`;

const Line = styled.hr`
  width: 100%;
  color: black;
`;

const ProjectState = styled.div`
  margin-left: 80%;
  margin-bottom: 10px;
`;

const ProductImgWrap = styled.div`
  background-color: white;
  width: 60vw;
  height: 443px;
  max-width: 90%;
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
