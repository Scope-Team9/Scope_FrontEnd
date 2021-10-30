/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import MypagePost from "./MypagePost";
import { postActions } from "../redux/modules/post";
import styled from "styled-components";

const PostList = () => {
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(postActions.getPostAPI());
  // }, []);

  const product_list = useSelector((state) => state.post);

  return (
    <React.Fragment>
      {/* <div>
        {product_list.map((p, idx) => (
          <Post key={idx} {...p} />
        ))}
      </div> */}
      <PostWrap>
        <MypagePost />
        <MypagePost />
        <MypagePost />
        <MypagePost />
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
