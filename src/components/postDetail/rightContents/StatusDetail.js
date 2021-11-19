import React from "react";
import { Grid, Text } from "../../../elements/Index";

const StatusDetail = (props) => {
  return (
    <React.Fragment>
      <Grid display="flex">
        <Text size="18px" bold margin="auto 10px auto 0px">
          프로젝트 상태
        </Text>
        <Text underline="1px solid black">
          {props.passedData?.projectStatus}
        </Text>
      </Grid>
    </React.Fragment>
  );
};

export default StatusDetail;
