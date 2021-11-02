import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, Image } from "../../elements/Index";

const TestTwo = props => {
  const userInfo = useSelector(state => state.user);

  return (
    <Grid>
      <div>테스트결과입니다.</div>
      <Image />
      <div>
        {" "}
        나의성향 - {userInfo.userTestResult} - 팔로잉 / 수직 / 과정 - 허숙희
      </div>
      <div>
        {" "}
        내가선호하는 성향- {userInfo.memberTestResult} - 팔로잉 / 수직 / 과정 -
        허숙희
      </div>
      <div> </div>
    </Grid>
  );
};

export default TestTwo;
