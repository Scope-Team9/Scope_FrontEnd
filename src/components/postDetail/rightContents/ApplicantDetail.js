import React from "react";
import { Grid, Text } from "../../../elements/Index";

import ProjectJoinUser from "../../ProjectJoinUser";

const ApplicantDetail = (props) => {
  return (
    <React.Fragment>
      <Grid margin="4px 0px 0px 0px">
        <Text size="18px" bold>
          모집인원
        </Text>
        <Grid>
          {props.passdedMenber?.map((item) => (
            <ProjectJoinUser key={item.userId} {...item} />
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ApplicantDetail;
