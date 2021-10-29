// MyPageMiddle.js

// import를 한다.
import React from "react";
import styled from "styled-components";

import { Grid, Image, Text } from "../elements/Index";

// MyPageMiddle의 함수형 컴포넌트를 만든다.
const MyPageMiddle = (props) => {
  return (
    <React.Fragment>
      <Grid display="flex" textAlign="center" margin="20px auto">
        <Grid>
          <Text>진행 프로젝트</Text>
        </Grid>
        <Grid>
          <Text>참여 프로젝트</Text>
        </Grid>
        <Grid>
          <Text>마감 프로젝트</Text>
        </Grid>
        <Grid>
          <Text>북마크한 프로젝트</Text>
        </Grid>
        <Grid>
          <Text>소개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default MyPageMiddle;
