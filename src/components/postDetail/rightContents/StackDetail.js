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
      <StackMedia>
        <Grid display="flex" margin="20px auto">
          <TextMedia>
            <Text size="18px" bold margin="auto 10px auto 0px">
              기술스택
            </Text>
          </TextMedia>

          <StacksMedia>
            {props.passedData?.techStack.map((item, index) => {
              return (
                <Text margin="auto 5px" key={index}>
                  <StackBox>{item}</StackBox>
                </Text>
              );
            })}
          </StacksMedia>
        </Grid>
      </StackMedia>
    </React.Fragment>
  );
};

// styled-components
const StackBox = styled.div`
  color: white;
  background-color: #554475;
  border: 1px solid #554475;
  border-radius: 10px;
  padding: 4px 10px;
  text-align: center;
`;

const TextMedia = styled.div`
  font-size: 10px;
  @media screen and (max-width: 400px) {
    font-size: 10px;
    width: 100px;
  }
`;

const StacksMedia = styled.div`
  display: flex;
  @media screen and (max-width: 1000px) {
    width: 50px;
  }
`;

const StackMedia = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    font-size: 12px;
    width: 50px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default StackDetail;
