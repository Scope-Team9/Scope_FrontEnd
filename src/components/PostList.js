/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import { postActions } from "../redux/modules/post";
import styled from "styled-components";
// import { useInView } from "react-intersection-observer";

import { Grid } from "../elements/Index";
import Spinner from "../shared/Spinner";

const PostList = (props) => {
  const dispatch = useDispatch();
  const [post, setPost] = React.useState();
  const [allPost, setAllPost] = React.useState();
  const [loading, setLoading] = React.useState(true);

  // let paging = useSelector((state) => state?.infinity.paging.next);
  let paging = props.paging;
  let reBook = useSelector((state) => state.rebook.reBook);
  let sort = useSelector((state) => state.sort.sort);
  let stacks = useSelector((state) => state.stack.stacks);
  let Render = props.Render;
  let isLogin = props.isLogin;

  // let post_list = props.post;
  React.useLayoutEffect(() => {
    const findStack = (item) => {
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
                {post.map((item) => {
                  return <Post key={item.postId} {...item} />;
                })}
              </PostWrap>
              {post.length === 0 && (
                <Grid justifyContent="center" margin="10px auto" width="100%">
                  <NoIntroduction src="/img/?????????.png"></NoIntroduction>
                  <NoIntroductionText>
                    ?????? ???????????? ????????????.
                  </NoIntroductionText>
                </Grid>
              )}
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
  row-gap: 5px;
  column-gap: 5px;
  /* grid-gap: 1px; */
  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    row-gap: 5px;
    column-gap: 5px;
  }
`;
const NoIntroduction = styled.img`
  width: 500px;
  margin: auto;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 100px;
    height: 100px;
    margin-bottom: 40px;
  }
`;

const NoIntroductionText = styled.p`
  color: #737373;
  font-size: 25px;
  text-align: center;
`;

export default PostList;
