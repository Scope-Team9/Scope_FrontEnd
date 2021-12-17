// ApplicantDetail.js
/* eslint-disable */

// import를 한다.
import React from "react";
import { Grid } from "../../../elements/Index";
import ProjectJoinUser from "../../ProjectJoinUser";

const ApplicantDetail = (props) => {
  return (
    <React.Fragment>
      <Grid margin="4px 0px 0px 0px">
        <Grid
          display="flex"
          margin="6px 0px 0px 0px"
          overflowX="auto"
          overflowY="none"
        >
          {props.passdedMenber?.map((item, number) => (
            <ProjectJoinUser key={item.userId} {...item} number={number} />
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default ApplicantDetail;
