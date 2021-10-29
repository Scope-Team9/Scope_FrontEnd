// MyPageWrite.js

// import를 한다.
import React from "react";
import styled from "styled-components";

import { Grid, Text, Input } from "../elements/Index";

// MyPageWrite의 함수형 컴포넌트를 만든다.
const MyPageWrite = (props) => {
  return (
    <React.Fragment>
      <Grid textAlign="center" padding="10px auto">
        <Input width="100%" height="500px" />
      </Grid>
    </React.Fragment>
  );
};

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default MyPageWrite;
