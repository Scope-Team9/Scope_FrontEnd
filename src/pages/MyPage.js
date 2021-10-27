// MyPage.js

// import를 한다.
import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import MyPageInfo from "../components/MyPageInfo";
import MyPageMiddle from "../components/MyPageMiddle";
import MyPageWrite from "../components/MyPageWrite";

// MyPage의 함수형 컴포넌트를 만든다.
const MyPage = (props) => {
  return (
    <React.Fragment>
      <MyPageInfo />
      <MyPageMiddle />
      <MyPageWrite />
    </React.Fragment>
  );
};

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default MyPage;