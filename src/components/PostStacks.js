/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { history } from "../redux/configureStore";
import { Grid, Image, Progress } from "../elements/Index";
import Img from "../images/flutter.png";

const PostStacks = (props) => {
  return (
    <div>
      <Grid
        display="flex"
        width="50px"
        borderRadius="50%"
        backgroundColor="white"
        margin="-26px 13px"
      >
        <Image src={Img} />
      </Grid>
    </div>
  );
};

export default PostStacks;
