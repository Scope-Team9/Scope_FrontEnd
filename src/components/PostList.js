/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import PostTest from "./PostTest";
import { postActions } from "../redux/modules/post";
import styled from "styled-components";
// import { useInView } from "react-intersection-observer";
import { height } from "@mui/system";

const PostList = () => {
  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.posts);
  console.log(post_list);

  return (
    <React.Fragment>
      <PostWrap>
        {post_list.map((item, index) => {
          return <Post key={index} {...item} />;
        })}
      </PostWrap>
    </React.Fragment>
  );
};

const PostWrap = styled.div`
  max-width: 1300px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 40px;
`;

export default PostList;
