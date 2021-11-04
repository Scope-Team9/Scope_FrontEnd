import React, { useEffect, useState } from "react";
import { Grid, Input, Text, Button, Image } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { userCreators } from "../redux/modules/user";
import Select from "react-select";
import { history } from "../redux/configureStore";
import PropensityTest from "./propensityTest/PropensityTest";
import CloseIcon from "@mui/icons-material/Close";

const LoginModal = props => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);
  const sigunupModalState = useSelector(state => state.user.sigunupModalState);

  var regExpNick = /^[a-zA-Z0-9]{2,10}$/;
  var regExpEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  //테크스택 옵션
  const techStackOption = [
    { value: "React", label: "React" },
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "Node", label: "Node" },
    { value: "cpp", label: "C++" },
    { value: "Flask", label: "Flask" },
    { value: "Django", label: "Django" },
    { value: "Vue", label: "Vue" },
    { value: "php", label: "php" },
    { value: "Swift", label: "Swift" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "TypeScript", label: "TypeScript" },
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
  const [email, setEmail] = useState(userInfo.email);
  const [techStack, setTeckstack] = useState([]);
  const [emailDup, setEmailDup] = useState(false);
  const [nameDup, setNameDup] = useState(false);
  const [test, setTest] = useState(false);

  console.log("닉네임", nickName);
  console.log("이메일", email);
  console.log("기술스택", techStack);
  console.log("sns아이디", userInfo.snsId);

  //닉네임 체크 미들웨어
  const nickCheck = nickName => {
    if (nickName === "") {
      alert("닉네임을 입력 해주세요.");
      return false;
    }

    if (!regExpNick.test(nickName)) {
      alert("닉네임은 4~10자 숫자 조합만 가능합니다.");
      return false;
    }
    dispatch(userCreators.nickCheckMiddleWare(nickName));
  };

  //이메일 체크 미들웨어
  const emailCheck = email => {
    if (nickName === "") {
      alert("이메일을 입력 해주세요.");
      return false;
    }

    if (!regExpEmail.test(email)) {
      alert("이메일 형식을 확인해주세요.");
      return false;
    }
    dispatch(userCreators.emailCheckMiddleWare(email));
  };

  //테스트 마친 회원가입 미들웨어 전송
  const preSignUP = () => {
    if (techStack.length === 0) {
      alert("기술스택을 선택 해주세요.");
      return false;
    }
    if (emailDup === false) {
      alert("이메일 중복확인을 해주세요.");
      return false;
    }
    if (nameDup === false) {
      alert("닉네임 중복확인을 해주세요.");
      return false;
    }
    const registerInfo = {
      snsId: userInfo.snsId,
      email: email,
      nickName: nickName,
      techStack: techStack,
    };
    console.log(registerInfo);
    dispatch(userCreators.testUserMiddleWare(registerInfo));
    setTest(true);
  };
  //회원가입이 필요한 유저일경우 모달창 활성화
  React.useEffect(() => {
    if (sigunupModalState) {
      setShowModal(true);
    }
  }, [sigunupModalState]);

  //회원이 아닐경우 회원가입, 회원일 경우 메인으로 이동
  if (sigunupModalState == true) {
    return (
      <Dialog maxWidth={"md"} scroll="paper" open={showModal}>
        <ModalWrap>
          {!test ? (
            <Grid
              display="flex"
              flexDirection="column"
              backgroundColor="#fff"
              borderRadius="0 0 5px 5px"
              position="relative"
              width="100%"
            >
              <Grid
                position="absolute"
                top="0px"
                right="10px"
                width="20px"
                padding="10px"
              >
                <CloseIcon fontSize="large" onClick={modalClose} />
              </Grid>
              <Grid bg="#F7F7F7" height="100px" alignItems="center">
                <Text margin="0 0 0 20px" bold>
                  회원가입
                </Text>
              </Grid>
              <Grid
                width="100%"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                margin="30px auto"
                height="50px"
              >
                <Grid
                  display="inline-block"
                  textAlign="center"
                  alignItems="center"
                  justifyContent="center"
                  width="70%"
                >
                  <Input
                    label="닉네임"
                    width="70%"
                    height="50px"
                    placeholder="닉네임을 입력해주세요"
                    _onChange={e => {
                      setNickName(e.target.value);
                    }}
                  >
                    닉네임
                  </Input>
                </Grid>
                <Grid width="20%">
                  <Button
                    width="100%"
                    height="50px"
                    backgroundColor="#222222"
                    text="닉네임 중복 체크"
                    _onClick={() => {
                      if (!regExpNick.test(nickName)) {
                        return false;
                      }
                      nickCheck(nickName);
                      setNameDup(true);
                    }}
                  ></Button>
                </Grid>
              </Grid>
              <Grid
                width="100%"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                margin="30px auto"
                height="100px"
              >
                <Grid
                  display="inline-block"
                  textAlign="center"
                  alignItems="center"
                  justifyContent="center"
                  width="70%"
                >
                  <Input
                    label="이메일"
                    width="70%"
                    height="50px"
                    placeholder="이메일을 입력해주세요"
                    _onChange={e => {
                      setEmail(e.target.value);
                    }}
                  >
                    이메일
                  </Input>
                </Grid>
                <Grid width="20%">
                  <Button
                    width="100%"
                    height="50px"
                    backgroundColor="#222222"
                    text="이메일 중복 체크"
                    _onClick={() => {
                      emailCheck(email);
                      setEmailDup(true);
                    }}
                  ></Button>
                </Grid>
              </Grid>
              <Grid
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="center"
              >
                <Text>기술스택</Text>
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
              </Grid>
              <Grid display="flex" width="80%" margin="auto">
                <Button
                  backgroundColor="#222222"
                  borderRadius="20px"
                  text="테스트시작"
                  margin="30px 0 70px 0"
                  _onClick={() => {
                    preSignUP();
                  }}
                ></Button>
              </Grid>
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
              top="0px"
              right="10px"
              width="20px"
              padding="10px"
            >
              <CloseIcon fontSize="large" onClick={modalClose} />
            </Grid>
            <Grid display="flex" bg="#F7F7F7" height="50px" alignItems="center">
              <Text margin="0 0 0 20px" bold>
                로그인
              </Text>
            </Grid>
            <Grid padding="20px 0">
              <Grid
                display="flex"
                flexDirection="column"
                alignItems="center"
                position="relative"
              >
                <Text
                  size="30px"
                  bold="800"
                  margin="40px 0"
                  justifyContent="center"
                >
                  Welcome to Scope!
                </Text>
                <Grid display="flex" flexDirection="column">
                  <GithubBtn
                    onClick={() => {
                      setShowModal(true);
                      window.location.href =
                        "https://github.com/login/oauth/authorize?client_id=5bb2c0fab941fb5b8f9f&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/user/github/callback";
                    }}
                  >
                    깃허브로그인
                  </GithubBtn>
                  <KakaoBtn
                    onClick={() => {
                      setShowModal(true);
                      window.location.href =
                        "https://kauth.kakao.com/oauth/authorize?client_id=2f892c61e0552c3f50223077e2fc5c6c&redirect_uri=http://localhost:3000/user/kakao/callback&response_type=code";
                    }}
                  >
                    카카오로그인
                  </KakaoBtn>
                  <NaverBtn
                    onClick={() => {
                      setShowModal(true);
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
  width: 550px;
  height: 500px;
`;

const GithubBtn = styled.div`
  display: inline-block;
  width: 250px;
  height: 50px;
  margin: 5px auto;
  padding-top: 12px;
  border: 0.5px solid #707070;
  box-sizing: border-box;
  border-radius: 22.5px;
  font-size: 14px;
  text-align: center;
  color: #555555;
  cursor: pointer;
`;

const KakaoBtn = styled.div`
  display: inline-block;
  width: 250px;
  height: 50px;
  margin: 5px auto;
  padding-top: 12px;
  border: 0.5px solid #707070;
  box-sizing: border-box;
  border-radius: 22.5px;
  font-size: 14px;
  text-align: center;
  color: #606060;
  cursor: pointer;
  background-color: #f9e000;
`;

const NaverBtn = styled.div`
  display: inline-block;
  width: 250px;
  height: 50px;
  margin: 5px auto;
  padding-top: 12px;
  border: 0.5px solid #707070;
  box-sizing: border-box;
  border-radius: 22.5px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  background-color: #00bf18;
`;

export default LoginModal;
