/* eslint-disable */
import React from "react";
import styled from "styled-components";

const MyFilter = (props) => {
  console.log(props);
  return (
    <div>
      <Filter
        id={props.id}
        onClick={() => {
          props.onClick(props.id);
        }}
      >
        {props.id}
      </Filter>
    </div>
  );
};

const Filter = styled.p`
  margin-left: 20%;
  margin-top: 100px;
  margin-bottom: 50px;
  cursor: pointer;
  width: 230px;
  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    /* text-decoration: underline; */
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
