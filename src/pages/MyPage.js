/* eslint-disable */
// MyPage.js

// import를 한다.
import React, { useState, useRef, createRef } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import MyPageInfo from "../components/MyPageInfo";

import Markdown from "../components/Markdown";
import { postActions } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";

// MyPage의 함수형 컴포넌트를 만든다.
const MyPage = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.isMainPage(false));
    dispatch(postActions.whatPage("myPage"));
  }, []);

  return (
    <React.Fragment>
      <MyPageInfo />
      {/* <MyPageMiddle /> */}

      {/* <Markdown></Markdown> */}
    </React.Fragment>
  );
};

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default MyPage;
