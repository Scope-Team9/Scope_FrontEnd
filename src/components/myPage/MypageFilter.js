/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { Grid, Image, Text, Button } from "../../elements/Index";
import MyFilter from "./filter/MyFilter";

const MypageFilter = (props) => {
  console.log(props);
  const [arr, setArr] = React.useState([
    {
      id: "모집",
    },
    {
      id: "진행중",
    },
    {
      id: "관심",
    },
    {
      id: "완료",
    },
    {
      id: "소개",
    },
  ]);
  return (
    <>
      {arr && (
        <>
          {arr.map((item) => {
            return (
              <MyFilter
                key={item.id}
                {...item}
                onClick={props.onClick}
              ></MyFilter>
            );
          })}
        </>
      )}
    </>
  );
};

export default MypageFilter;
