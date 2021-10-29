// DetailWrite.js

// import를 한다.
import React from "react";
import styled from "styled-components";

import { Grid, Input, Button } from "../elements/Index";

// DetailWrite의 함수형 컴포넌트를 만든다.
const DetailWrite = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Input width="500px" height="300px" padding="10px" placeholder="몰라" />
      </Grid>
      <Grid padding="6px">
        <Button width="100px" height="30px" margin="auto 10px">
          모집완료
        </Button>
        <Button width="100px" height="30px" margin="auto 10px">
          포스트수정
        </Button>
        <Button width="100px" height="30px" margin="auto 10px">
          포스트삭제
        </Button>
      </Grid>
    </React.Fragment>
  );
};

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default DetailWrite;
