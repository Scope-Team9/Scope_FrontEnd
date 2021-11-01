import React, { useState } from "react";
import { Grid, Input, Text, Button, Image } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { userCreators } from "../redux/modules/user";
import { emailCheck } from "../shared/common";
import Select from "react-select";
import { history } from "../redux/configureStore";
import PropensityTest from "./propensityTest/PropensityTest";
import { instance } from "../lib/axios";

const LoginModal = props => {
  const dispatch = useDispatch();
  const user_info = useSelector(state => state.user);
  const sigunupModalState = useSelector(state => state.user.sigunupModalState);
  const token = window.localStorage.getItem("token");

  console.log(user_info);

  //테크스택 옵션
  const techStackOption = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "spring", label: "Spring" },
    { value: "nodejs", label: "Nodejs" },
  ];

  //모달
  const { showModal, setShowModal } = props;

  const modalOpen = () => {
    setShowModal(true);
  };
  const modalClose = () => {
    setShowModal(false);
  };

  //입력부분
  const [nickName, setNickName] = useState();
  const [email, setEmail] = useState(user_info.email);
  const [techStack, setTeckstack] = useState([]);
  const [emailDup, setEmailDup] = useState(true);
  const [test, setTest] = useState(false);

  console.log("닉네임", nickName);
  console.log("이메일", email);
  console.log("기술스택", techStack);
  console.log("sns아이디", user_info.snsId);

  //이메일 중복체크
  const emailCheck = email => {
    return () => {
      instance
        .get(`/api/login/email?email=${email}`)
        .then(res => {
          console.log(res);
          if (res.data.status == 200) {
            setEmailDup(true);
            window.alert("사용가능한 메일입니다.");
          } else {
            if (res.data.status == 400) {
              window.alert("중복된 이메일이 존재합니다");
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    };
  };

  //테스트 회원 유효성 검사
  const preSignUP = () => {
    if (nickName === undefined) {
      alert("닉네임을 입력 해주세요.");
      return false;
    }
    if (techStack.length === 0) {
      alert("기술스택을 선택 해주세요.");
      return false;
    }
    if (emailDup === false) {
      alert("이메일 중복확인을 해주세요.");
      return false;
    }
    setTest(true);
  };

  //테스트 마친 회원가입 미들웨어전송
  const register = () => {
    const registerInfo = {
      snsId: user_info.snsId,
      email: email,
      nickname: nickName,
      techStack: techStack,
    };
    console.log(registerInfo);
    // dispatch(userCreators.signupMiddleware(registerInfo));
  };

  if (sigunupModalState == true) {
    return (
      <Dialog maxWidth={"md"} scroll="paper" open={showModal}>
        <ModalWrap>
          {!test ? (
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
              <Grid display="flex" width="100%">
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
                <Button
                  width="10%"
                  backgroundColor="#222222"
                  text="이메일 중복 체크"
                  _onClick={() => {
                    emailCheck();
                  }}
                ></Button>
              </Grid>
              <Select
                defaultValue={[techStackOption[0]]}
                isMulti
                name="techStack"
                options={techStackOption}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={e => {
                  let techStack = [];
                  let arr = e;
                  let idx = 0;
                  for (idx = 0; idx < e.length; idx++) {
                    techStack.push(arr[idx]["value"]);
                  }
                  setTeckstack(techStack);
                }}
              >
                기술스택
              </Select>
              <Button
                backgroundColor="#222222"
                borderRadius="20px"
                text="테스트시작"
                margin="0 0 100px 0"
                _onClick={() => {
                  preSignUP();
                }}
              ></Button>
            </Grid>
          ) : (
            <PropensityTest />
          )}
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
                        "https://github.com/login/oauth/authorize?client_id=5bb2c0fab941fb5b8f9f&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/user/github/callback";
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
