/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { Grid, Image } from "../elements/Index";
import Logo from "../images/임시로고.jpg";
import { history } from "../redux/configureStore";

const HeaderLeft = () => {
  return (
    <Grid>
      <Image
        _onClick={() => {
          history.push("/");
        }}
        src={Logo}
        size="50"
      />
    </Grid>
  );
};

export default HeaderLeft;
