// TitleDetail.js
/* eslint-disable */

// import를 한다
import React from "react";
import styled from "styled-components";
import { Grid } from "../../../elements/Index";

// TitleDetail의 함수형 컴포넌트를 만든다
const TitleDetail = (props) => {
  return (
    <React.Fragment>
      <Grid margin="20px auto 0px">
        <TitleText>{props.passedData?.title}</TitleText>
        <Line />
      </Grid>
    </React.Fragment>
  );
};

// styled-components
const Line = styled.hr`
  width: 100%;
  margin: 0 0 5px 0;
  background-color: #172d40;
  height: 1px;
`;

const TitleText = styled.p`
  font-size: 30px;
  font-weight: 500;
  @media screen and (max-width: 376px) {
    font-size: 20px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다
export default TitleDetail;
