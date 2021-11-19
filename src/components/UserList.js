import React from "react";
import { Grid } from "../elements/Index";
import styled from "styled-components";

const UserList = (props) => {
  let list = props.list;

  return (
    <React.Fragment>
      <Grid
        width="60px"
        height="60px"
        borderRadius="50%"
        backgroundColor="#C4C4C4"
        margin="10px auto auto auto"
      >
        {list === "LVG" && <Img src="/img/호랑이.png" />}
        {list === "LVP" && <Img src="/img/늑대.png" />}
        {list === "LHG" && <Img src="/img/여우.png" />}

        {list === "LHP" && <Img src="/img/판다.png" />}
        {list === "FVG" && <Img src="/img/토끼.png" />}
        {list === "FVP" && <Img src="/img/개.png" />}

        {list === "FHG" && <Img src="/img/고양이.png" />}
        {list === "FHP" && <Img src="/img/물개.png" />}
        {list === "RHP" && <Img src="/img/너구리.png" />}
      </Grid>
    </React.Fragment>
  );
};

const Img = styled.img`
  margin: 6px;
  width: 48px;
  height: 48px;
`;

export default UserList;
