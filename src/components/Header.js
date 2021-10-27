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
        boxShadow="rgba(0, 0, 0, 0.1) 0px 2px 10px;"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        top="0"
        left="0"
        bg="#fff"
        padding="20px"
        zIndex="10"
      >
        <Grid width="auto" height="auto">
          <HeaderLeft />
        </Grid>
        <Grid width="auto" height="auto">
          <HeaderRight />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
