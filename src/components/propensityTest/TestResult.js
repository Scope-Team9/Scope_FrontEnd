import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, Image } from "../../elements/Index";
import UserType from "./UserType";

const TestResult = props => {
  const userInfo = useSelector(state => state.user);
  console.log(userInfo);
  const userType = userInfo.userPropensityType;

  return (
    <Grid textAlign="center">
      <Grid>테스트결과입니다.</Grid>
      <Grid display="flex" justifyContent="center">
        <Image />
      </Grid>
      <Grid>
        <UserType userType={userType} />
      </Grid>
    </Grid>
  );
};

export default TestResult;
