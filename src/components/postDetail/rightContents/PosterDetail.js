import React from "react";
import { Grid, Text } from "../../../elements/Index";

import UserList from "../../UserList";

const PosterDetail = (props) => {
  return (
    <React.Fragment>
      <Grid textAlign="center" margin="0px">
        <Text size="18px" bold>
          게시자
        </Text>
        <Grid>
          <UserList list={props.passedData?.propensityType}></UserList>
        </Grid>
        <Text size="20px">{props.passedData?.nickname}</Text>
        <Grid>({props.passedData?.propensityType})</Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PosterDetail;
