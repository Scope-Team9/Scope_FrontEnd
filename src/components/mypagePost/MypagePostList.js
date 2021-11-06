import React from "react";
import MypagePost from "./MypagePost";

const MypagePostList = props => {
  const myCards = props;
  const newMyCards = Object.values(myCards);
  console.log(myCards);
  console.log(newMyCards);
  return (
    <>
      {newMyCards && (
        <React.Fragment>
          {newMyCards.map((p, idx) => {
            return <MypagePost key={idx} {...p}></MypagePost>;
          })}
        </React.Fragment>
      )}
    </>
  );
};

export default MypagePostList;
