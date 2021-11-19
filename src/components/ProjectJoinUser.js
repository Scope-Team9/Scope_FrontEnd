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
          <ImgType
            type={props.userPropensityType}
            cursor="pointer"
            _onClick={() => {
              goToMypage(props.userId);
            }}
          ></ImgType>
        </Grid>
        <Text size="20px">{props.nickname}</Text>
        <Grid>({props.userPropensityType})</Grid>
      </Grid>
    </React.Fragment>
  );
};
export default ProjectJoinUser;
