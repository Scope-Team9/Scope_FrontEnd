// ApplicantDetail.js
// import를 한다.
import React from "react";
import { Grid, Text } from "../../../elements/Index";
import ProjectJoinUser from "../../ProjectJoinUser";

// ApplicantDetail의 함수형 컴포넌트를 만든다.
const ApplicantDetail = (props) => {
  return (
    <React.Fragment>
      <Grid margin="4px 0px 0px 0px">
        <Text size="18px" bold>
          게시자
        </Text>
        <Grid display="flex" margin="6px 0px 0px 0px">
          {props.passdedMenber?.map((item) => (
            <ProjectJoinUser key={item.userId} {...item} />
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default ApplicantDetail;
