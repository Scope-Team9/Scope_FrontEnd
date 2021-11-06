import React from "react";
import MypagePost from "./MypagePost";

const MypagePostList = (props) => {
  const myCards = [props[0]];
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
