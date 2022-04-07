// DateDetail.js
/* eslint-disable */

// import를 한다
import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

// DateDetail의 함수형 컴포넌트를 만든다
const DateDetail = (props) => {
  return (
    <React.Fragment>
      <Grid display="flex" margin="6px 0 0 0px">
        <DateMedia>
          <Grid display="flex">
            <Text margin="auto 12px auto 0px" color="#172d40ab">
              진행기간
            </Text>
            <DateBox>
              {props.passedData?.startDate} ~ {props.passedData?.endDate}
            </DateBox>
          </Grid>
        </DateMedia>
      </Grid>
    </React.Fragment>
  );
};

// styled-components
const DateBox = styled.div`
  color: black;
  font-size: 11px;
  padding: 4px 10px;
  border: 1px solid #172d40;
  border-radius: 50px;
  text-align: center;
`;

const DateMedia = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    width: 300px;
    font-size: 12px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다
export default DateDetail;
