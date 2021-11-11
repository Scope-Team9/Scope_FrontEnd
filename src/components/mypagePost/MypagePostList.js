/* eslint-disable */
import React from "react";
import MypagePost from "./MypagePost";
import { Grid, Image } from "../../elements/Index";
const MypagePostList = (props) => {
  const myCards = props;
  const newMyCards = Object.values(myCards);
  console.log(myCards);
  console.log(newMyCards);
  return (
    <>
      {newMyCards && (
        <React.Fragment>
          <Grid>
            {newMyCards.map((p, idx) => {
              return <MypagePost key={idx} {...p}></MypagePost>;
            })}
          </Grid>
        </React.Fragment>
      )}
    </>
  );
};

export default MypagePostList;
