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
  let stack = useSelector((state) => state.stack.stack);
  let sort = useSelector((state) => state.sort.sort);
  let paging = useSelector((state) => state.infinity.paging.next);
  let reBook = useSelector((state) => state.rebook.reBook);
  let post_list = useSelector((state) => state.post.posts);

  // console.log(post_list);
  // console.log(paging);

  let posts = post_list.slice(0, paging);
  // console.log(posts);

  return (
    <React.Fragment>
      <PostWrap>
        {posts && (
          <>
            {posts.map((item, index) => {
              return <Post key={index} {...item} />;
            })}
          </>
        )}
      </PostWrap>
    </React.Fragment>
  );
};

const PostWrap = styled.div`
  max-width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
  /* grid-gap: 1px; */
  @media (max-width: 1700px) {
    width: 100%;
  }
`;

export default PostList;
