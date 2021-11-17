/* eslint-disable */
// AddPost.js

import React from "react";
import LeftBanner from "../components/postWrite/LeftBanner";
import RightWrite from "../components/postWrite/RightWrite";

import { Grid } from "../elements/Index";

const WritePost = (props) => {
  return (
    <React.Fragment>
      <Grid
        display="flex"
        justifyContent="center"
        maxWidth="1920px"
        height="100%"
        margin="auto"
        border="1px solid #C4C4C4"
      >
        <LeftBanner />
        <RightWrite />
      </Grid>
    </React.Fragment>
  );
};

export default WritePost;
