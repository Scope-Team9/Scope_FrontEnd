/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, Image, Text } from "../../elements/Index";
import TestData from "./Testdata.json";

const TestResult = props => {
  const myUserType = useSelector(state => state.user.userPropensityType);
  // console.log(myUserType);
  const resultType = TestData.usertype.filter(
    type => type?.userType === myUserType
  );

  React.useLayoutEffect(() => {}, [myUserType]);

  return (
    <Grid>
      {myUserType && (
        <Grid textAlign="center" width="95%" margin="auto">
          <Grid textAlign="left" height="6%">
            <Text bold size="12px">
              당신의 성향은?
            </Text>
          </Grid>

          <Grid display="flex" justifyContent="center" height="94%">
            {resultType?.map(type => (
              <Grid bg="#fff" key={type.userType} {...type}>
                <Grid
                  height="7%"
                  bg="#554475"
                  borderRadius="20px"
                  padding="12px 0"
                  margin="12px 0"
                >
                  <Text size="13px" color="#fff">
                    {type.title}
                  </Text>
                </Grid>
                <Grid
                  margin="12px 0"
                  borderRadius="20px"
                  border="1px solid #554475"
                  padding="40px 0"
                  height="30%"
                >
                  <ElText>
                    {type.text1} <br />
                    {type.text2}
                    <br /> {type.text3}
                    <br /> {type.text4}
                  </ElText>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

const ElText = styled.span`
  font-size: 11px;
  text-align: center;
  font-family: "GmarketSans";
  line-height: 1.2;
  letter-spacing: -0.0375em;
  @media (max-width: 650px) {
    font-size: 10px;
  }
`;

export default TestResult;
