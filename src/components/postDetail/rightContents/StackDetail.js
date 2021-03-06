// StackDetail.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

// StackDetail의 함수형 컴포넌트를 만든다..
const StackDetail = (props) => {
  return (
    <React.Fragment>
      <Grid display="flex" margin="6px auto">
        <Text margin="auto 10px auto 0px" color="#172d40ab">
          Stack
        </Text>
        <StackMedia>
          {props.passedData?.techStack.map((item, index) => {
            return (
              <Text margin="auto 5px" key={item}>
                <StackBox>{item}</StackBox>
              </Text>
            );
          })}
        </StackMedia>
      </Grid>
    </React.Fragment>
  );
};

// styled-components
const StackBox = styled.div`
  color: white;
  background-color: #172d40;
  border: 1px solid #172d40;
  border-radius: 50px;
  padding: 4px 10px;
  font-size: 14px;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 11px;
  }
`;

const StackMedia = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    font-size: 12px;
    width: 120px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default StackDetail;
