/* eslint-disable */
import React from "react";
import { Grid, Button } from "../elements/Index";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";

const Footer = () => {
  return (
    <Wrap>
      <Grid display="flex" bg="#fff" border="1px solid #111">
        <Grid
          width="33%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <HomeIcon />
        </Grid>
        <Grid width="33%">
          <Button width="100%" width="100%" text="게시글작성" />
        </Grid>

        <Grid width="33%">
          <Button text="마이페이지" />
        </Grid>
      </Grid>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: none;
  @media screen and (max-width: 1600px) {
    width: 100vw;
    margin: auto;
    height: 5.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0);
    z-index: 10;
    position: fixed;
    bottom: 1%;
  }
  @media screen and (max-width: 420px) {
    width: 100vw;
    margin: auto;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0);

    z-index: 10;
    position: fixed;
    bottom: 0%;
  } ;
`;
export default Footer;
