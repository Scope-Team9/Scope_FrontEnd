/* eslint-disable */
import { Grid } from "../elements/Index";
import styled from "styled-components";
import React from "react";

const Spinner = () => {
  return (
    <React.Fragment>
      <Grid width="100%" margin="auto">
        <IMG src="/img/호랭이.gif" alt="spinner"></IMG>
      </Grid>
    </React.Fragment>
  );
};

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
`;

export default Spinner;
