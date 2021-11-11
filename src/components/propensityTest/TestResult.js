import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, Image } from "../../elements/Index";
import UserType from "./UserType";

const TestResult = props => {
  const userType = useSelector(state => state.user.userPropensityType);
  console.log(userType);

  return (
    <Grid textAlign="center">
      <Grid>테스트결과입니다.</Grid>
      <Grid display="flex" justifyContent="center">
        <Image />
      </Grid>
      <Grid textAlign="center">
        당신의 타입은 {userType} 입니다.
        <UserType userType={userType} />
      </Grid>
    </Grid>
  );
};

export default TestResult;
