import React from "react";
import { Grid, Input, Text, Button, Image } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { userCreators } from "../redux/modules/user";
import { GoogleLogin } from "react-google-login";

const LoginModal = (props) => {
  const dispatch = useDispatch();

  //모달
  const { showModal, setShowModal } = props;
  const modalClose = () => {
    setShowModal(false);
  };

  //구글로그인
  const clientId =
    "334506855914-cqhtql5mhh7nkadkov7bspshehiejo5g.apps.googleusercontent.com";

  const onSuccess = (res) => {
    console.log("Login Success", res);
  };

  const onFailure = (res) => {
    console.log("Login Failed", res);
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
                Welcome to Scope!
              </Text>
              <Grid display="flex" flexDirection="column">
                <a
                  href={
                    "https://github.com/login/oauth/authorize?client_id=e479ff8fd436197619e4&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/user/github/callback"
                  }
                >
                  깃허브로그인
                </a>
                <a
                  href={
                    "https://kauth.kakao.com/oauth/authorize?client_id=2f892c61e0552c3f50223077e2fc5c6c&redirect_uri=http://localhost:3000/user/kakao/callback&response_type=code"
                  }
                >
                  카카오로그인
                </a>
                <GoogleLogin
                  clientId={clientId}
                  buttonText="구글 로그인"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                />
              </Grid>
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
