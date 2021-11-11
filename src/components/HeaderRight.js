/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

import { useDispatch, useSelector } from "react-redux";
import { Grid, Text, Image, Button } from "../elements/Index";
import userImage from "../images/임시로고.jpg";
import LoginModal from "./LoginModal";
import { userCreators } from "../redux/modules/user";

import { deleteCookie } from "../shared/Cookie";

const HeaderRight = (props) => {
  const dispatch = useDispatch();
  const isToken = document.cookie.split("=")[1];
  const user_info = useSelector((state) => state.user);

  console.log(isToken);
  console.log(user_info);
  const [showModal, setShowModal] = React.useState(false);
  const sigunupModalState = useSelector(
    (state) => state.user.sigunupModalState
  );
  const modalOpen = () => {
    setShowModal(true);
  };
  const modalClose = () => {
    setShowModal(false);
  };

  const logOut = () => {
    deleteCookie("ScopeUser");
    window.alert("로그아웃 됐습니다");
    dispatch(userCreators.logOut());
    history.replace("/");
  };

  if (isToken) {
    return (
      <Grid
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        height="auto"
        width="auto"
      >
        <HeaderWrapper>
          <Grid display="flex" alignItems="center" margin="0 20px">
            <Image
              _onClick={() => {
                history.push(`/mypage/${user_info.userId}`);
              }}
              src={userImage}
              size="50"
            />
            {/* <Text bold>{user_info.nickname}님 환영합니다!</Text> */}
          </Grid>
          <Button
            height="50px"
            width="132px"
            text="로그아웃"
            _onClick={logOut}
          ></Button>
        </HeaderWrapper>
      </Grid>
    );
  } else {
    return (
      <Grid
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        height="auto"
      >
        <HeaderWrapper>
          <Button width="100px" text="로그인" _onClick={modalOpen}></Button>
          <LoginModal showModal={showModal} setShowModal={setShowModal} />
        </HeaderWrapper>
      </Grid>
    );
  }
};

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-right: 0px;
  justify-content: space-evenly;
  /* @media screen and (max-width: 595px) {
    display: none; */
  /* } ; */
`;

export default HeaderRight;
