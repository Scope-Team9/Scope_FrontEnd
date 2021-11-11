import React from "react";
import UserList from "./UserList";
import { Grid, Text, Image, Button, Input } from "../elements/Index";
import styled from "styled-components";

const ProjectJoinUser = (props) => {
  console.log("랜더링 됬다", props);
  return (
    <React.Fragment>
      <Grid>
        <Grid
          width="45px"
          height="45px"
          borderRadius="50%"
          backgroundColor="#C4C4C4"
        >
          {props.userPropensityType === "LVG" && <Img src="/img/호랑이.png" />}
          {props.userPropensityType === "LVP" && <Img src="/img/늑대.png" />}
          {props.userPropensityType === "LHG" && <Img src="/img/여우.png" />}

          {props.userPropensityType === "LHP" && <Img src="/img/판다.png" />}
          {props.userPropensityType === "FVG" && <Img src="/img/토끼.png" />}
          {props.userPropensityType === "FVP" && <Img src="/img/개.png" />}

          {props.userPropensityType === "FHG" && <Img src="/img/고양이.png" />}
          {props.userPropensityType === "FHP" && <Img src="/img/물개.png" />}
          {props.userPropensityType === "RHP" && (
            <Image src="/img/너구리.png" />
          )}
        </Grid>
        <Grid>{props.nickname}</Grid>
        <Grid>({props.userPropensityType})</Grid>
      </Grid>
    </React.Fragment>
  );
};

const Img = styled.img`
  margin: 5px;
  width: 36px;
  height: 36px;
`;

export default React.memo(ProjectJoinUser);
