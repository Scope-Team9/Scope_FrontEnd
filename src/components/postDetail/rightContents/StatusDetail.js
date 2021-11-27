// StatusDetail.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

// StatusDetail의 함수형 컴포넌트를 만든다.
const StatusDetail = (props) => {
  return (
    <React.Fragment>
      <Grid display="flex">
        <StatusMedia>
          <Text margin="0px 10px auto 0px">프로젝트 상태</Text>
          <Text color="#9D81F0">{props.passedData?.projectStatus}</Text>
        </StatusMedia>
      </Grid>
    </React.Fragment>
  );
};

const StatusMedia = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 10px;
    width: 360px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default StatusDetail;
