/* eslint-disable */
import React from "react";
// import MypagePost from "./MypagePost";
import Post from "../Post";
import { Grid, Image } from "../../elements/Index";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
const MypagePostList = props => {
  // console.log(props);
  const userId = useParams();

  // console.log(props);
  const mypage = true;

  const myCards = props.post;
  const newMyCards = Object.values(myCards);
  // console.log(myCards);
  // console.log(newMyCards);

  return (
    <>
      {newMyCards && (
        <React.Fragment>
          <PostWrap>
            {newMyCards.map(p => {
              return (
                <Post
                  mypage={mypage}
                  key={p.postId}
                  {...p}
                  userId={userId}
                  myUserId={props.myUserId}
                  assessment={props.assessment}
                  doSetAssessment={props.doSetAssessment}
                ></Post>
              );
            })}
          </PostWrap>
        </React.Fragment>
      )}
    </>
  );
};

const PostWrap = styled.div`
  width: 750px;
  margin: 0 0 0 38.5%;
  display: grid;

  justify-content: center;
  align-items: center;

  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid-gap: 1px;
  @media (max-width: 1200px) {
    grid-gap: 10px;
    margin: auto;
  }
  @media (max-width: 768px) {
    width: 90vw;
    grid-gap: 10px;
    margin: auto;
  }
  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  }
`;

export default MypagePostList;
