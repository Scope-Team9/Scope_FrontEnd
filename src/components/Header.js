/* eslint-disable */
import React from "react";
import { Grid, Button } from "../elements/Index";
import HeaderLeft from "../components/HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <>
      <Grid
        width="100vw"
        height="60px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="rgba(255, 255, 255, 0)"
        padding="20px"
        zIndex="10"
        margin="auto"
      >
        <Grid width="auto" height="auto" margin="0 0 0 20px">
          <HeaderLeft />
        </Grid>
        <Grid width="auto" height="auto" margin="0 40px 0 0 ">
          <HeaderRight />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
