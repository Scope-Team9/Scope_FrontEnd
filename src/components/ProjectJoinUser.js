import React from "react";
import { Grid, Text, Image } from "../elements/Index";
import styled from "styled-components";
import { useHistory } from "react-router";
import ImgType from "../shared/ImgType";

const ProjectJoinUser = (props) => {
  const history = useHistory();
  const goToMypage = (userId) => {
    history.push(`/mypage/${userId}`);
  };
  return (
    <React.Fragment>
      <Grid>
        <Grid
          width="60px"
          height="60px"
          borderRadius="50%"
          backgroundColor="#C4C4C4"
        >
          <ImgType img={props.userPropensityType}></ImgType>
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
