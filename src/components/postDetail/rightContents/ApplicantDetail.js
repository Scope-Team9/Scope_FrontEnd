import React from "react";
import { Grid, Text } from "../../../elements/Index";

import ProjectJoinUser from "../../ProjectJoinUser";

const ApplicantDetail = (props) => {
  return (
    <React.Fragment>
      <Grid margin="6px 0px 0px 0px">
        <Text size="18px" bold>
          게시자
        </Text>
        <Grid display="flex">
          {props.passdedMenber?.map((item) => (
            <ProjectJoinUser key={item.userId} {...item} />
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ApplicantDetail;
