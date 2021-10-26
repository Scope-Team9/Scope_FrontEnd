import React from "react";
import { Grid, Input, Text, Button, Image } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { userCreators } from "../redux/modules/user";

const LoginModal = props => {
  const dispatch = useDispatch();

  //모달
  const { showModal, setShowModal } = props;
  const modalClose = () => {
    setShowModal(false);
  };

  const logIn = () => {
    dispatch(userCreators.loginMiddleware());
  };
  return (
    <Dialog maxWidth={"md"} scroll="paper" open={showModal}>
      <ModalWrap>
        <Grid
          className="모달컨테이너"
          backgroundColor="#fff"
          borderRadius="0 0 5px 5px"
          position="relative"
          width="100%"
          height="100%"
        >
          <Grid padding="20px 0">
            <Grid alignItems="center" position="relative">
              <Grid
                position="absolute"
                top="-10px"
                right="20px"
                color="black"
                width="20px"
                padding="10px"
              >
                <Button text="닫기" _onClick={modalClose} />
              </Grid>
              <Text
                padding="0 0 5px 20px"
                size="40px"
                bold="800"
                margin="-10px 0"
                justifyContent="center"
              >
                가입하기
              </Text>
              <Button margin="1px 0" text="깃허브 로그인"></Button>
              <a
                href={
                  "https://kauth.kakao.com/oauth/authorize?client_id=2f892c61e0552c3f50223077e2fc5c6c&redirect_uri=http://localhost:3000/user/kakao/callback&response_type=code"
                }
              >
                카카오로그인
              </a>
              <Button margin="1px 0" text="구글 로그인"></Button>
            </Grid>
          </Grid>
          <hr color="#eee" />
        </Grid>
      </ModalWrap>
    </Dialog>
  );
};

const ModalWrap = styled.div`
  overflow: hidden;
  width: 500px;
`;

export default LoginModal;
