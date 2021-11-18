import React from "react";
import { Grid, Text } from "../../../elements/Index";

import UserList from "../../UserList";

const PosterDetail = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Text size="18px">프로젝트 게시자</Text>
        <Grid
          width="60px"
          height="60px"
          borderRadius="50%"
          backgroundColor="#C4C4C4"
          margin="10px 0px 0px"
        >
          <UserList list={props.passedData?.propensityType}></UserList>
        </Grid>
        <Text size="20px">{props.passedData?.nickname}</Text>
        <Grid>({props.passedData?.propensityType})</Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PosterDetail;
