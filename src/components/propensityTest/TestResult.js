import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, Image } from "../../elements/Index";

const TestResult = props => {
  const userInfo = useSelector(state => state.user);
  console.log(userInfo);
  const userType = userInfo.userPropensityType;

  return (
    <Grid textAlign="center">
      <div>테스트결과입니다.</div>
      <Grid display="flex" justifyContent="center">
        <Image />
      </Grid>

      <div>
        {" "}
        나의성향 - {userInfo.userPropensityType} - 팔로잉 / 수직 / 과정 - 허숙희
      </div>
      <div>
        리더형인 당신은 리더지만 수평적 리더십을 원해요! 결과보다는 과정을
        중요시하는 당신은 우리 스코프 사이드 프로젝트에 적합한 사람!
      </div>
      <div> </div>
    </Grid>
  );
};

export default TestResult;
