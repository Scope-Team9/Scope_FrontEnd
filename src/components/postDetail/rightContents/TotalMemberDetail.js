// TotalMemberDetail.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

// TotalMemberDetail의 함수형 컴포넌트를 만든다
const TotalMemberDetail = (props) => {
  return (
    <React.Fragment>
      <TotalMedia>
        <Grid display="flex">
          <Text margin="0px 10px 20px 0px">프로젝트 인원</Text>
          <Text color="#554475">{props.passedData?.totalMember}명</Text>
        </Grid>
      </TotalMedia>
    </React.Fragment>
  );
};

const TotalMedia = styled.div`
  @media screen and (max-width: 600px) {
    width: 100px;
    font-size: 10px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default TotalMemberDetail;
