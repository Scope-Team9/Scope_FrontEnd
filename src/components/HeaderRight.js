/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button } from "../elements/Index";
import LoginModal from "./LoginModal";
import { userCreators } from "../redux/modules/user";
import { deleteCookie } from "../shared/Cookie";
import ImgType from "../shared/ImgType";

const HeaderRight = props => {
  const dispatch = useDispatch();
  const isToken = document.cookie;
  const userInfo = useSelector(state => state.user);
  // console.log(userInfo);
  const [showModal, setShowModal] = React.useState(false);
  const [doLogout, setDoLogOut] = React.useState(false);

  const sigunupModalState = useSelector(state => state.user.sigunupModalState);
  const modalOpen = () => {
    setShowModal(true);
  };
  console.log(userInfo.userPropensityType);

  const logOut = () => {
    deleteCookie("ScopeUser");
    dispatch(userCreators.logOut());
    history.replace("/");
    setDoLogOut(!doLogout);
  };
  React.useLayoutEffect(() => {}, [
    isToken,
    doLogout,
    userInfo.userPropensityType,
  ]);

  if (isToken) {
    return (
      <>
        {userInfo && (
          <HeaderWrapper>
            {/* <Message
            onClick={() => {
              history.push(`/message`);
            }}
          >
            <i class="far fa-envelope"></i>
          </Message>
          <Bell>
            <i class="far fa-bell"></i>
          </Bell> */}
            <IconWrap>
              <Grid
                _onClick={() => {
                  history.push(`/mypage/${userInfo.userId}`);
                }}
              >
                <ImgType type={userInfo.userPropensityType} />
              </Grid>
            </IconWrap>
            <ButtonWrap>
              <Btn onClick={logOut}>로그아웃</Btn>
            </ButtonWrap>
          </HeaderWrapper>
        )}
      </>
    );
  } else {
    return (
      <HeaderWrapper>
        <ButtonWrap>
          <Btn onClick={modalOpen}>로그인</Btn>
        </ButtonWrap>

        <LoginModal showModal={showModal} setShowModal={setShowModal} />
      </HeaderWrapper>
    );
  }
};

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-right: 0px;
  justify-content: space-between;
  @media screen and (max-width: 595px) {
    width: 100px;
  } ;
`;

const Message = styled.div`
  font-size: 30px;
  margin-top: 8px;
  margin-right: 16px;
  cursor: pointer;
`;
const Bell = styled.div`
  margin-top: 8px;
  font-size: 30px;
  cursor: pointer;
`;

const ButtonWrap = styled.div`
  @media screen and (max-width: 595px) {
    margin: auto 2px auto auto;
  } ;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  margin: auto 10px auto auto;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  } ;
`;

const UserImg = styled.img`
  object-fit: cover;
  width: 50px;
  border-radius: 50px;
  box-shadow: 0 0 3px #ddd;
  cursor: pointer;
`;

const Btn = styled.button`
  background-color: #fff;
  color: #17334a;
  border-radius: 25px;
  border: 1px solid #17334a;
  cursor: pointer;
  height: 50px;
  width: 120px;
  &:hover {
    background-color: #17334a;
    color: #fff;
    transform: translate();
    transition: 0.3s ease-out;
  }
  font-family: "GmarketSans";
  @media screen and (max-width: 425px) {
    height: 35px;
    width: 80px;
    font-size: 12px;
  }
`;

export default HeaderRight;
