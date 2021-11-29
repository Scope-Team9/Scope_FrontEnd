/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { Grid, Image, Text, Button } from "../../../elements/Index";

const MyFilter = props => {
  // console.log(props);
  return (
    <>
      {props && (
        <Grid>
          <FilterDiv active={props.active}>
            <Filter
              id={props.id}
              active={props.active}
              onClick={() => {
                props.setStatus(props.id);
                props.onClick(props.id);
              }}
            >
              {props.id}
            </Filter>
          </FilterDiv>
        </Grid>
      )}
    </>
  );
};

const FilterDiv = styled.div`
  align-items: center;
  margin: 50px auto;
  width: 80%;
  height: 35px;

  /* background-color: ${props => (props.active ? "black" : " yellow")}; */
  border-bottom: ${props => (props.active ? "1mm ridge #554475" : null)};
`;

const Filter = styled.p`
  text-align: center;
  cursor: pointer;
  width: auto;

  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);

    color: #737373;
  }
  @media screen and (max-width: 1400px) {
    /* margin-top: 1050px; */
  }
  @media screen and (max-width: 750px) {
    /* margin-top: 1050px; */
  } ;
`;
export default MyFilter;
