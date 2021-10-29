import React, { useState } from "react";
import { Grid, Input, Text, Button, Image } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { userCreators } from "../redux/modules/user";

const LoginModal = props => {
  const dispatch = useDispatch();
  const sigunupModalState = useSelector(state => state.user.sigunupModalState);
  console.log(sigunupModalState);

  const token = window.localStorage.getItem("token");

  //모달
  const { showModal, setShowModal } = props;
  const modalClose = () => {
    setShowModal(false);
  };

  const [nickName, setNickName] = useState();
  const [email, setEmail] = useState();
  const [techStack, setTeckstack] = useState([]);

  //미들웨어전송
  const register = () => {
    const registerInfo = {
      email: email,
      nickname: nickName,
      techStack: [techStack],
    };
    console.log(registerInfo);
    dispatch(userCreators.signupMiddleware(registerInfo));
  };

  if (sigunupModalState == true) {
    return (
      <Dialog maxWidth={"md"} scroll="paper" open={showModal}>
        <ModalWrap>
          <Text>회원가입</Text>
          <Input
            label="닉네임"
            type="텍스트"
            placeholder="닉네임을 입력해주세요"
            _onChange={e => {
              setNickName(e.target.value);
            }}
          >
            닉네임
          </Input>
          <Input
            label="이메일"
            placeholder="이메일을 입력해주세요"
            type="텍스트"
            onChange={e => {
              setEmail(e.target.value);
            }}
          >
            이메일
          </Input>
          <Input type="텍스트">기술스택</Input>
          <Button
            backgroundColor="#222222"
            borderRadius="20px"
            text="테스트시작"
            _onClick={() => {
              register();
            }}
          ></Button>
        </ModalWrap>
      </Dialog>
    );
  } else {
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
            <Grid padding="20px 0">
              <Grid alignItems="center" position="relative">
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
                  <GithubBtn
                    onClick={() => {
                      window.location.href =
                        "https://github.com/login/oauth/authorize?client_id=e479ff8fd436197619e4&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/user/github/callback";
                    }}
                  >
                    깃허브로그인
                  </GithubBtn>
                  <KakaoBtn
                    onClick={() => {
                      window.location.href =
                        "https://kauth.kakao.com/oauth/authorize?client_id=2f892c61e0552c3f50223077e2fc5c6c&redirect_uri=http://localhost:3000/user/kakao/callback&response_type=code";
                    }}
                  >
                    카카오로그인
                  </KakaoBtn>
                  <NaverBtn
                    onClick={() => {
                      window.location.href =
                        "https://kauth.kakao.com/oauth/authorize?client_id=2f892c61e0552c3f50223077e2fc5c6c&redirect_uri=http://localhost:3000/user/kakao/callback&response_type=code";
                    }}
                  >
                    네이버로그인
                  </NaverBtn>
                </Grid>
              </Grid>
            </Grid>

            <hr color="#eee" />
          </Grid>
        </ModalWrap>
      </Dialog>
    );
  }
};

const ModalWrap = styled.div`
  overflow: hidden;
  width: 500px;
`;

const GithubBtn = styled.div`
  display: inline-block;
  width: 300px;
  height: 40px;
  margin: 5px auto;
  padding-top: 12px;
  border: 0.5px solid #555555;
  box-sizing: border-box;
  border-radius: 22.5px;
  font-size: 14px;
  text-align: center;
  color: #555555;
  cursor: pointer;
`;

const KakaoBtn = styled.div`
  display: inline-block;
  width: 300px;
  height: 40px;
  margin: 5px auto;
  padding-top: 12px;
  border: 0.5px solid #555555;
  box-sizing: border-box;
  border-radius: 22.5px;
  font-size: 14px;
  text-align: center;
  color: #555555;
  cursor: pointer;
`;

const NaverBtn = styled.div`
  display: inline-block;
  width: 300px;
  height: 40px;
  margin: 5px auto;
  padding-top: 12px;
  border: 0.5px solid #555555;
  box-sizing: border-box;
  border-radius: 22.5px;
  font-size: 14px;
  text-align: center;
  color: #555555;
  cursor: pointer;
`;

export default LoginModal;
