/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { Grid, Image } from "../elements/Index";
import Logo from "../images/Logo.png";
import { history } from "../redux/configureStore";

const HeaderLeft = () => {
  return (
    <Grid>
      <LogoDiv>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => {
            history.push("/");
          }}
          src={Logo}
          width="150px"
        />
      </LogoDiv>
    </Grid>
  );
};
const LogoDiv = styled.div`
  width: 20%;
`;
export default HeaderLeft;
