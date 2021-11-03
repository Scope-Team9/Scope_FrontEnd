import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

import { useDispatch, useSelector } from "react-redux";
import { Grid, Text, Image, Button } from "../elements/Index";
import userImage from "../images/임시로고.jpg";
import LoginModal from "./LoginModal";

import { deleteCookie } from "../shared/Cookie";

const HeaderRight = props => {
  const is_login = useSelector(state => state.user.is_login);
  const user_info = useSelector(state => state.user);

  console.log(document.cookie);
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
    history.replace("/");
  };

  if (is_login) {
    return (
      <Grid
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        height="auto"
      >
        <HeaderWrapper>
          <Grid display="flex" alignItems="center" margin="0 10px">
            <Image src={userImage} />
            <Text>{user_info.nickname}</Text>
          </Grid>
          <Button
            backgroundColor="#111"
            width="100px"
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
          <Grid display="flex" alignItems="center" margin="0 10px">
            <Image src={userImage} />
            <Text>사용자</Text>
          </Grid>
          <Button
            backgroundColor="#111"
            width="100px"
            text="로그인"
            _onClick={modalOpen}
          ></Button>
          <LoginModal showModal={showModal} setShowModal={setShowModal} />
        </HeaderWrapper>
      </Grid>
    );
  }
};

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-right: 36px;
  justify-content: space-evenly;
  /* @media screen and (max-width: 595px) {
    display: none; */
  /* } ; */
`;

export default HeaderRight;
