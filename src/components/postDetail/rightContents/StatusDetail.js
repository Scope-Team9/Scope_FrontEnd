import React from "react";
import { Grid, Text } from "../../../elements/Index";

const StatusDetail = (props) => {
  return (
    <React.Fragment>
      <Grid display="flex">
        <Text margin="auto 10px auto 0px">프로젝트 상태 :</Text>
        <Text>{props.passedData?.projectStatus}</Text>
      </Grid>
    </React.Fragment>
  );
};

export default StatusDetail;
