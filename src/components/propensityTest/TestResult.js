import React from "react";
import { Grid, Button, Image } from "../../elements/Index";

const TestTwo = props => {
  const {
    setUserPropensityType,
    setMemberPropensityType,
    handleUserCreate,
    handleMemberCreate,
  } = props;

  return (
    <div>
      <div>테스트결과입니다.</div>
      <Image />
      <div> FVP - 팔로잉 / 수직 / 과정 - 허숙희</div>
      <div> </div>
    </div>
  );
};

export default TestTwo;
