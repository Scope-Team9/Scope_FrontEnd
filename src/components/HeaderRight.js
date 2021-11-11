/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

import { useDispatch, useSelector } from "react-redux";
import { Grid, Text, Image, Button } from "../elements/Index";
import LoginModal from "./LoginModal";
import { userCreators } from "../redux/modules/user";

import { deleteCookie } from "../shared/Cookie";

const HeaderRight = props => {
  const dispatch = useDispatch();
  const isToken = document.cookie;
  const userInfo = useSelector(state => state.user);
  console.log(userInfo);
  // console.log(isToken);
  // console.log(isToken);
  // console.log(userInfo);
  // console.log("나의 타입은?", props);
  const [showModal, setShowModal] = React.useState(false);
  const sigunupModalState = useSelector(state => state.user.sigunupModalState);
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
          <IconWrap>
            <Grid
              display="flex"
              alignItems="center"
              margin="0 20px"
              _onClick={() => {
                console.log;
                history.push(`/mypage/${userInfo.userId}`);
              }}
            >
              {userInfo.userPropensityType === "LVG" && (
                <UserImg size="50" src="/img/호랑이.png"></UserImg>
              )}
              {userInfo.userPropensityType === "LVP" && (
                <UserImg src="/img/늑대.png"></UserImg>
              )}
              {userInfo.userPropensityType === "LHG" && (
                <UserImg src="/img/여우.png"></UserImg>
              )}
              {userInfo.userPropensityType === "LHP" && (
                <UserImg src="/img/판다.png"></UserImg>
              )}
              {userInfo.userPropensityType === "FVG" && (
                <UserImg src="/img/토끼.png"></UserImg>
              )}
              {userInfo.userPropensityType === "FVP" && (
                <UserImg src="/img/개.png"></UserImg>
              )}
              {userInfo.userPropensityType === "FHG" && (
                <UserImg src="/img/고양이.png"></UserImg>
              )}
              {userInfo.userPropensityType === "FHP" && (
                <UserImg src="/img/물개.png"></UserImg>
              )}
            </Grid>
          </IconWrap>
          <ButtonWrap>
            {/* <Button
              backgroundColor="#fff"
              height="50px"
              width="132px"
              text="로그아웃"
              color=" #B29CF4"
              border="10px solid #ddd"
              hover="#B29CF4"
              hoverColor="#ffff"
              _onClick={logOut}
            ></Button> */}
            <Logout bg="#fff" height="50px" width="132px">
              로그아웃
            </Logout>
          </ButtonWrap>
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
  @media screen and (max-width: 595px) {
    width: 20%;
  } ;
`;
const ButtonWrap = styled.div`
  @media screen and (max-width: 595px) {
    display: none;
  } ;
`;

const IconWrap = styled.div`
  @media screen and (max-width: 595px) {
    width: 90%;
  } ;
`;

const CardImg = styled.img`
  object-fit: cover;
`;

const UserImg = styled.img`
  object-fit: cover;
  width: 50px;
  border-radius: 12px;
  background-color: #ececec;
  cursor: pointer;
`;

const Logout = styled.div`
  background-color: #fff;
  height: 30px;
  width: 100px;
  color: #b29cf4;
  border: 1px solid #ddd;
  &:hover {
    background-color: #b29cf4;
    color: #fff;
  }
`;
export default HeaderRight;
