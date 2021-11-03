// DetailList.js

// import를 한다.
import React from "react";
import styled from "styled-components";

import { Grid, Text, Image, Input, Button } from "../elements/Index";

// DetailList의 함수형 컴포넌트를 만든다.
const DetailList = props => {
  console.log("제목");
  return (
    <React.Fragment>
      <Grid
        width="550px"
        padding="16px"
        margin="40px auto"
        border="2px solid #8B3FF8"
        borderRadius="30px"
      >
        <Title>제목입니다.</Title>
        <Grid margin="10px auto">
          <Text>한줄설명입니다.</Text>
        </Grid>
        <Grid>
          <Text>게시자 정보</Text>
          <Grid display="column">
            <Image />
            <Text>이승민</Text>
          </Grid>
          <Grid margin="10px auto">
            <Text>프로젝트 인원</Text>
            <Grid display="flex">
              <Grid display="column">
                <Image />
                <Text>이승민</Text>
              </Grid>
            </Grid>
            <Grid display="flex" margin="10px auto">
              <Text margin="auto 10px auto 0px">프로젝트 기간 :</Text>
              <Text> 2021-10-24 ~ 2021-11-24</Text>
            </Grid>
            <Grid display="flex" margin="10px auto">
              <Text margin="auto 10px auto 0px">기술스택</Text>
              <Text>#JAVA, #REACT, #SPRING</Text>
            </Grid>
            <Grid display="flex">
              <Text margin="auto 10px auto 0px">프로젝트 상태</Text>
              <Text>모집 중</Text>
            </Grid>
            <Grid>
              <Input
                width="500px"
                height="300px"
                padding="10px"
                placeholder="몰라"
              />
            </Grid>
            <Grid padding="16px">
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
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Title = styled.h1``;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default DetailList;
