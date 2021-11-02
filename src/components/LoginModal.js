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
import CloseIcon from "@mui/icons-material/Close";

const LoginModal = props => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);
  const sigunupModalState = useSelector(state => state.user.sigunupModalState);
  const token = window.localStorage.getItem("token");

  var regExpNick = /^[a-zA-Z0-9]{4,10}$/;
  var regExpEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  console.log(userInfo);

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
  const [email, setEmail] = useState(userInfo.email);
  const [techStack, setTeckstack] = useState([]);
  const [emailDup, setEmailDup] = useState(false);
  const [nameDup, setNameDup] = useState(false);
  const [test, setTest] = useState(false);

  console.log("닉네임", nickName);
  console.log("이메일", email);
  console.log("기술스택", techStack);
  console.log("sns아이디", userInfo.snsId);

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

  //닉네임 중복체크
  const nickCheck = nickName => {
    console.log(nickName);
    return () => {
      instance
        .get(`/api/login/nickname?nickname=${nickName}`)
        .then(res => {
          console.log(res);
          if (res.data.status == 200) {
            setNameDup(true);
            window.alert("사용가능한 닉네임입니다.");
          } else {
            if (res.data.status == 400) {
              window.alert("중복된 닉네임이 존재합니다");
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    };
  };

  //테스트 회원 유효성 검사
  //테스트 마친 회원가입 미들웨어전송
  const preSignUP = () => {
    if (nickName === undefined) {
      alert("닉네임을 입력 해주세요.");
      return false;
    } else if (techStack.length === 0) {
      alert("기술스택을 선택 해주세요.");
      return false;
    } else if (emailDup === false) {
      alert("이메일 중복확인을 해주세요.");
      return false;
    } else if (nameDup === false) {
      alert("닉네임중복확인을 해주세요.");
      return false;
    } else if (!regExpEmail.test(email)) {
      alert("이메일 형식을 확인해주세요.");
      return false;
    } else if (!regExpNick.test(nickName)) {
      alert("닉네임은 4~10자 숫자 조합만 가능합니다.");
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
              <Grid
                display="flex"
                bg="#F7F7F7"
                height="50px"
                alignItems="center"
              >
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
                    _onClick={nickCheck(nickName)}
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
                    _onClick={emailCheck(email)}
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
      <Dialog maxWidth={"sm"} scroll="paper" open={showModal}>
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
  overflow: hidden;
  width: 400px;
  height: 450px;
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
