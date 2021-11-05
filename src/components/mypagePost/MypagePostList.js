import React from "react";
import MypagePost from "./MypagePost";

const MypagePostList = (props) => {
  console.log("프롭스 받았다 모집중", props);
  const myCards = props;
  console.log(myCards);
  return (
    <>
      {myCards && (
        <React.Fragment>
          {myCards.map((p, idx) => {
            return <MypagePost key={idx} {...p}></MypagePost>;
          })}
        </React.Fragment>
      )}
    </>
  );
};

export default MypagePostList;
