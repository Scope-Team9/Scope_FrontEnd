import React from "react";
import { Grid, Image } from "../elements/Index";
import styled from "styled-components";

const UserList = (props) => {
  let list = props.list;

  return (
    <React.Fragment>
      <Grid display="flex" width="45px" borderRadius="50%">
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
  margin: 5px;
  width: 36px;
  height: 36px;
`;

export default UserList;
