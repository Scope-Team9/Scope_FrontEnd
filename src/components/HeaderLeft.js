import React from "react";
import styled from "styled-components";
import { Grid, Image } from "../elements/Index";
import Logo from "../images/임시로고.jpg";

const HeaderLeft = () => {
  return (
    <Grid>
      <Image src={Logo} size='50' />
    </Grid>
  );
};

export default HeaderLeft;
