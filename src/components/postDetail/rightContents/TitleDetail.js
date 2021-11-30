// TitleDetail.js
/* eslint-disable */

// import를 한다.
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

// TitleDetail의 함수형 컴포넌트를 만든다.
const TitleDetail = (props) => {
  return (
    <React.Fragment>
      <Grid margin="20px auto 0px">
        <TitleMedia>
          <TitleText>
            {props.passedData?.title}
            <Line />
          </TitleText>
        </TitleMedia>
      </Grid>
    </React.Fragment>
  );
};

// styled-components
const Line = styled.hr`
  width: 100%;
  margin-bottom: 8px;
  background-color: #554475;
  height: 3px;
`;

const TitleMedia = styled.p`
  @media screen and (max-width: 376px) {
    font-size: 12px;
  }
`;

const TitleText = styled.p`
  font-size: 40px;
  font-weight: 500;
  @media screen and (max-width: 376px) {
    font-size: 20px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default TitleDetail;
