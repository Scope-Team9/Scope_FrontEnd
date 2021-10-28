// MyPageInfo.js

// import를 한다.
import React from "react";
import styled from "styled-components";

import Img from "../images/임시로고.jpg";
import { Grid, Image, Text } from "../elements/Index";

import Header from "./Header";

// MyPageInfo의 함수형 컴포넌트를 만든다.
const MyPageInfo = (props) => {
  return (
    <React.Fragment>
      <Grid height="100%" bg="#ffff" padding="60px 0 10px 0">
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      </Grid>
      <Grid margin="50px auto">
        <Title>My Page</Title>
      </Grid>
      <Grid display="flex" border="1px solid black" borderRadius="16px">
        <Grid display="flex" justifyContent="center">
          <Image src={Img} size="120" />
        </Grid>
        <Grid>
          <Grid>
            <Text>닉네임 : 아리랑</Text>
          </Grid>
          <Grid margin="10px auto">
            <Text>메일주소 : mypage@scope.com</Text>
          </Grid>
          <Grid>
            <Text>나의성향 : 호랑이</Text>
          </Grid>
          <Grid margin="10px auto">
            <Text>나의 성향은 호랑이고 나는 어떤사람과 잘 어울립니다.</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  z-index: 100;
  position: sticky;
  top: 0px;
  background: #1111;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default MyPageInfo;
