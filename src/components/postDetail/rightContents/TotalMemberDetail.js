// TotalMemberDetail.js
/* eslint-disable */

// import를 한다
import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

// TotalMemberDetail의 함수형 컴포넌트를 만든다
const TotalMemberDetail = (props) => {
  return (
    <React.Fragment>
      <TotalMedia>
        <Grid display="flex">
          <Text margin="0px 10px 10px 0px" color="#172d40ab">
            프로젝트 인원
          </Text>
          <Text color="#172D40">{props.passedData?.totalMember}명</Text>
        </Grid>
      </TotalMedia>
    </React.Fragment>
  );
};

// styled-components
const TotalMedia = styled.div`
  @media screen and (max-width: 600px) {
    width: 100px;
    font-size: 12px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다
export default TotalMemberDetail;
