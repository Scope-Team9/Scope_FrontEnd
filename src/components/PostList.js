/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import PostTest from "./PostTest";
import { postActions } from "../redux/modules/post";
import styled from "styled-components";
// import { useInView } from "react-intersection-observer";

import { Grid, Image, Text, Button } from "../elements/Index";
import Spinner from "../shared/Spinner";

const PostList = props => {
  const dispatch = useDispatch();
  const [post, setPost] = React.useState();
  const [allPost, setAllPost] = React.useState();
  const [loading, setLoading] = React.useState(true);

  // let paging = useSelector((state) => state?.infinity.paging.next);
  let paging = props.paging;
  let reBook = useSelector(state => state.rebook.reBook);
  let sort = useSelector(state => state.sort.sort);
  let post_list = useSelector(state => state.post.posts);
  let stacks = useSelector(state => state.stack.stacks);
  let Render = props.Render;
  let isLogin = props.isLogin;

  // let stacks = props.stacks;
  // console.log(stackss);

  const findStack = item => {
    const itemStack = item.techStack;
    if (stacks) {
      for (let i = 0; i < stacks.length; i++) {
        for (let j = 0; j < itemStack.length; j++) {
          if (stacks[i] === itemStack[j]) {
            return true;
          }
        }
      }
    }
  };

  // let post_list = props.post;
  React.useEffect(() => {
    setPost();
    if (stacks.length !== 0) {
      const postList = props.post.filter(findStack);
      let posts = postList.slice(0, paging);
      setPost(posts);
    }
    if (stacks.length === 0) {
      let posts = props.post.slice(0, paging);
      setPost(posts);
    }
    setLoading(false);
  }, [stacks, paging, sort, reBook, Render, isLogin]);

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {post && (
            <>
              <PostWrap>
                {post.map(item => {
                  return <Post key={item.postId} {...item} />;
                })}

                {post.length === 0 && (
                  <Grid margin="auto" width="100%" height="100%" display="flex">
                    <NoIntroduction src="/img/소개글너구리.png"></NoIntroduction>
                    <NoIntroductionText>
                      아직 포스트가 없네요
                      <br /> .
                      <br /> .
                      <br /> .
                    </NoIntroductionText>
                  </Grid>
                )}
              </PostWrap>
            </>
          )}
        </>
      )}
    </React.Fragment>
  );
};

const PostWrap = styled.div`
  max-width: 100%;
  margin: auto;
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  /* grid-gap: 1px; */
  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  }
`;
const NoIntroduction = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */

  margin: auto;
  display: flex;
  justify-content: center;
`;

const NoIntroductionText = styled.p`
  color: #737373;
  font-size: 25px;
  width: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: auto;
`;

export default PostList;
