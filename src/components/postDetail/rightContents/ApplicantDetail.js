import React from "react";
import { Grid, Text } from "../../../elements/Index";

import ProjectJoinUser from "../../ProjectJoinUser";

const ApplicantDetail = (props) => {
  return (
    <React.Fragment>
      <Text size="18px">모집인원</Text>
      <Grid display="flex" margin="10px auto">
        {props.passdedMenber?.map((item) => (
          <ProjectJoinUser key={item.userId} {...item} />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default ApplicantDetail;
