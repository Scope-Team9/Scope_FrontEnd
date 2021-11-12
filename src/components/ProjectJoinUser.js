import React from "react";
import { Grid, Text, Image } from "../elements/Index";
import styled from "styled-components";

const ProjectJoinUser = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid
          width="60px"
          height="60px"
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
          {props.userPropensityType === "RHP" && <Img src="/img/너구리.png" />}
        </Grid>
        <Text size="20px">{props.nickname}</Text>
        <Grid>({props.userPropensityType})</Grid>
      </Grid>
    </React.Fragment>
  );
};

const Img = styled.img`
  margin: 6px;
  width: 48px;
  height: 48px;
`;

export default ProjectJoinUser;
