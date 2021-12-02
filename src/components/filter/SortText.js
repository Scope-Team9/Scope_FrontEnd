/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { Grid, Button } from "../../elements/Index";
const SortText = (props) => {
  return (
    <Filtering
      id={props.item.id}
      active={props.item.active}
      onClick={() => {
        props.onClick();
      }}
    >
      {props.item.id}
    </Filtering>
  );
};

const Filtering = styled.p`
  margin: 25px 10px 25px 10px;
  cursor: pointer;
  font-weight: bold;
  border-bottom: ${(props) =>
    props.active ? "1mm ridge rgb(170, 50, 220, .6)" : null};
  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    /* text-decoration: underline; */
    color: #dacceb;
  }
`;
export default SortText;
