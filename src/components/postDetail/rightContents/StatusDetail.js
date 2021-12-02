// StatusDetail.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

// StatusDetail의 함수형 컴포넌트를 만든다.
const StatusDetail = props => {
  return (
    <React.Fragment>
      <Grid display="flex">
        <StatusMedia>
          <Text margin="0px 10px 0px 0px" color="#4c4759">
            프로젝트 상태
          </Text>
          {props.passedData?.projectStatus === "모집중" && (
            <Text
              bg="#2699FB"
              color="white"
              border="1px solid #2699FB"
              borderRadius="50px"
              padding="4px 15px"
              size="13px"
            >
              {props.passedData?.projectStatus}
            </Text>
          )}
          {props.passedData?.projectStatus === "진행중" && (
            <Text
              bg="#15B915"
              color="white"
              border="1px solid #15B915"
              borderRadius="50px"
              padding="4px 15px"
              size="13px"
            >
              {props.passedData?.projectStatus}
            </Text>
          )}
          {props.passedData?.projectStatus === "종료" && (
            <Text
              bg="#f9a8a8"
              color="white"
              border="1px solid #f9a8a8"
              borderRadius="50px"
              padding="4px 15px"
              size="13px"
            >
              {props.passedData?.projectStatus}
            </Text>
          )}
        </StatusMedia>
      </Grid>
    </React.Fragment>
  );
};

const StatusMedia = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 12px;
    width: 360px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default StatusDetail;
