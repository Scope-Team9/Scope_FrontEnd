// DetailList.js

// import를 한다.
import React from "react";
import styled from "styled-components";

import { Grid, Text, Image } from "../elements/Index";

// DetailList의 함수형 컴포넌트를 만든다.
const DetailList = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Title>제목입니다제목!</Title>
        <Grid>
          <Text>한줄설명입니다한줄설명!</Text>
        </Grid>
        <Grid>
          <Text>프로젝트 게시자 정보</Text>
          <Grid display="flex">
            <Image />
          </Grid>
          <Grid>
            <Text>현재 프로젝트 인원</Text>
            <Grid display="flex">
              <Image />
              <Image />
              <Image />
              <Image />
              <Image />
            </Grid>
            <Grid display="flex">
              <Text>프로젝트 기간 :</Text>
              <Text> 2021-10-24 ~ 2021-11-24</Text>
            </Grid>
            <Grid display="flex">
              <Text>기술스택</Text>
              <Text>#JAVA, #REACT, #SPRING</Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Title = styled.h1``;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default DetailList;
