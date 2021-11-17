/* eslint-disable */
// AddPost.js

import React from "react";
import LeftBanner from "./postAdd/LeftBanner";
import RightWrite from "./postAdd/RightWrite";

import { Grid } from "../elements/Index";

const AddPost = (props) => {
  return (
    <React.Fragment>
      <Grid
        display="flex"
        justifyContent="center"
        maxWidth="1920px"
        height="100%"
        margin="auto"
        border="1px solid #C4C4C4"
        alignItems="center"
      >
        {/* 이미지 */}
        <LeftBanner />
        <RightWrite />
      </Grid>
    </React.Fragment>
  );
};

export default AddPost;
