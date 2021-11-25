import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, Image, Text } from "../../elements/Index";
import TestData from "./Testdata.json";
import UserType from "./UserType";

const TestResult = props => {
  const myUserType = useSelector(state => state.user.userPropensityType);
  const [resultType, setResultType] = React.useState(
    TestData.usertype.filter(type => type.userType === myUserType)
  );

  return (
    <Grid textAlign="center" width="90%" margin="auto">
      <Grid textAlign="left">
        <Text bold size="12px">
          당신의 성향은?
        </Text>
      </Grid>
      <Grid display="flex" justifyContent="center">
        {resultType.map(type => (
          <Grid key={type.userType} {...type}>
            <Grid
              bg="#17334A"
              borderRadius="20px"
              padding="12px 0"
              margin="12px 0"
            >
              <Text size="14px" color="#fff">
                {type.title}
              </Text>
            </Grid>
            <Grid
              margin="12px 0"
              borderRadius="20px"
              border="1px solid #17334A"
              padding="40px 0"
            >
              <Text size="12px">
                {type.text1} <br />
                {type.text2}
                <br /> {type.text3}
                <br /> {type.text4}
              </Text>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default TestResult;
