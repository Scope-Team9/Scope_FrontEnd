/* eslint-disable */
import React from "react";
// import MypagePost from "./MypagePost";
import Post from "../Post";
import { Grid, Image } from "../../elements/Index";
import styled from "styled-components";
const MypagePostList = props => {
  const mypage = true;

  const myCards = props;
  const newMyCards = Object.values(myCards);
  console.log(myCards);
  console.log(newMyCards);
  return (
    <>
      {newMyCards && (
        <React.Fragment>
          <PostWrap>
            {newMyCards.map((p, idx) => {
              return <Post mypage={mypage} key={idx} {...p}></Post>;
            })}
          </PostWrap>
        </React.Fragment>
      )}
    </>
  );
};

const PostWrap = styled.div`
  width: 50%;
  margin: 0 0 0 33%;
  display: grid;

  justify-content: center;
  align-items: center;

  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  /* grid-gap: 1px; */
`;

export default MypagePostList;
