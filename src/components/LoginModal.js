/* eslint-disable */
import React, { useState } from "react";
import { Grid, Input, Text, Button, Image } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { userCreators } from "../redux/modules/user";
import Select from "react-select";
import PropensityTest from "./propensityTest/PropensityTest";
import CloseIcon from "@mui/icons-material/Close";

const LoginModal = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const sigunupModalState = useSelector(
    (state) => state.user.sigunupModalState
  );

  var regExpNick = /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,5}$/;
  var regExpEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  //테크스택 옵션
  const techStackOption = [
    { value: "React", label: "React" },
    { value: "Java", label: "Java" },
    { value: "Spring", label: "Spring" },
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

  const TestClose = () => {
    setShowModal(false);
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

  //닉네임 체크 미들웨어
  const nickCheck = (nickName) => {
    if (nickName === undefined) {
      alert("닉네임을 입력 해주세요.");
      return false;
    }

    if (!regExpNick.test(nickName)) {
      alert("닉네임은 2~5자 숫자 조합만 가능합니다.");
      return false;
    }
    dispatch(userCreators.nickCheckMiddleWare(nickName));
  };

  //이메일 체크 미들웨어
  const emailCheck = (email) => {
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

  //테스트 마친 회원가입 api
  const preSignUP = () => {
    if (techStack.length === 0) {
      alert("기술스택을 선택 해주세요.");
      return false;
    }
    if (techStack.length > 8) {
      alert("기술선택을 7개 이하로 입력해주세요.");
      return false;
    }
    if (nameDup === false) {
      alert("닉네임 중복확인을 해주세요.");
      return false;
    }
    const registerInfo = {
      snsId: userInfo.snsId,
      // email: userInfo.email,
      nickName: nickName,
      techStack: techStack,
    };
    dispatch(userCreators.testUserMiddleWare(registerInfo));
    setTest(true);
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      borderRadius: "20px",
      fontSize: "12px",
      textAlign: "left",
      padding: "0 0 0 12px",
    }),
    multiValue: (styles, { data }) => ({
      ...styles,
      color: data.color,
      backgroundColor: "#17334a",
      color: "white",
      borderRadius: "20px",
    }),
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
  };
  //회원가입이 필요한 유저일경우 모달창 활성화
  React.useLayoutEffect(() => {
    if (sigunupModalState) {
      setShowModal(true);
    }
  }, [sigunupModalState]);

  // 개선해야됨
  // const openWindow = () => {
  //   let customWindow = window.open(
  //     `${process.env.REACT_APP_REDIRECTION_LOCAL_KAKAO}`,
  //     "",
  //     "_blank"
  //   );

  //   setTimeout(() => {
  //     customWindow.close();
  //   }, 5000);

  //     //s3
  //                     // process.env.REACT_APP_REDIRECTION_S3_KAKAO;

  //                     //local
  //                     // process.env.REACT_APP_REDIRECTION_LOCAL_KAKAO;

  //                   // 최종 주소
  //                   // process.env.REACT_APP_REDIRECTION_SCOPE_KAKAO;
  // };

  const closeWindow = () => {
    setTimeout(() => {
      window.close();
    }, 500);
  };

  //회원이 아닐경우 회원가입, 회원일 경우 메인으로 이동
  if (sigunupModalState == true) {
    return (
      <Dialog
        maxWidth={"sm"}
        scroll="paper"
        open={showModal}
        onClose={modalClose}
      >
        <SignupModalWrap>
          {/* 테스트가 필요한경우 */}
          {!test ? (
            <Grid>
              {/* 헤더 */}
              <Grid
                height="7%"
                bg="#17334a"
                position="relative"
                textAlign="center"
                padding="10px 0 10px 0"
              >
                <Grid
                  position="absolute"
                  top="0px"
                  right="10px"
                  width="20px"
                  padding="10px"
                >
                  <CloseIcon
                    sx={{ color: "#fff", fontSize: 35 }}
                    onClick={TestClose}
                    cursor="pointer"
                  />
                </Grid>
                <Grid
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="40px"
                >
                  <Text size="15px" bold color="#fff">
                    회원가입
                  </Text>
                </Grid>
              </Grid>
              {/* 타이틀 */}
              <Grid height="3%" textAlign="center" margin="30px 0 10px 0">
                <Text bold="bold" size="21px">
                  Welcome to Scope!
                </Text>
              </Grid>
              {/* 입력부분 */}
              <Grid
                display="flex"
                justifyContent="center"
                height="58%"
                textAlign="center"
                padding="10px 0"
                margin="auto"
              >
                <Grid width="90%" height="70%" display="flex">
                  {/* 라벨 */}
                  <Grid
                    width="15%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="top"
                    margin="5px auto"
                    height="280px"
                  >
                    <Grid
                      height="25%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      margin="23px 0 15px 0"
                    >
                      <Text color="#111">닉네임</Text>
                    </Grid>
                    <Grid padding="10px 0 0 0">
                      <Text color="#111">기술스택</Text>
                    </Grid>
                  </Grid>
                  {/* 입력부분 */}
                  <Grid
                    width="60%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="top"
                    margin="15px auto"
                    height="280px"
                  >
                    <Grid height="13%" margin="16px 0 20px">
                      <Input
                        borderRadius="25px"
                        border="1px solid #ddd"
                        fontSize="12px"
                        padding="0 0 0 23px"
                        height="100%"
                        placeholder="닉네임을 입력해주세요"
                        _onChange={(e) => {
                          setNickName(e.target.value);
                        }}
                      >
                        닉네임
                      </Input>
                      {!regExpNick.test(nickName) && (
                        <Grid
                          width="170px"
                          margin="0 0 0 20px"
                          textAlign="left"
                        >
                          <Text size="9px" color="red">
                            ※ 2~5자 한글,영문,숫자 조합
                          </Text>
                        </Grid>
                      )}
                      {regExpNick.test(nickName) && (
                        <Grid
                          width="170px"
                          margin="0 0 0 20px"
                          textAlign="left"
                        >
                          <Text size="9px" color="green">
                            ※ 올바른 닉네임입니다!
                          </Text>
                        </Grid>
                      )}
                    </Grid>

                    <Grid height="45%" padding="0 0 10px 0">
                      <Select
                        styles={customStyles}
                        placeholder="보유중인 기술을 선택해주세요!"
                        isMulti
                        name="techStack"
                        options={techStackOption}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={(e) => {
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
                      {techStack.length <= 7 && (
                        <Grid
                          width="180px"
                          margin="0 0 0 20px"
                          textAlign="left"
                        >
                          <Text size="9px" color="green">
                            ※ 기술스택은 7개까지 가능
                          </Text>
                        </Grid>
                      )}
                      {techStack.length > 7 && (
                        <Grid
                          width="180px"
                          margin="0 0 0 20px"
                          textAlign="left"
                        >
                          <Text size="9px" color="red">
                            ※ 기술스택이 초과되었습니다.
                          </Text>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                  {/* 중복체크 */}
                  <Grid
                    width="20%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    margin="10px auto"
                    height="280px"
                  >
                    <Grid height="85%">
                      <Button
                        height="35px"
                        fontSize="10px"
                        text="닉네임 중복"
                        _onClick={() => {
                          nickCheck(nickName);
                          setNameDup(true);
                        }}
                      ></Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* 버튼 */}
              <Grid width="50%" margin="auto" height="10%">
                <Button
                  text="성향테스트"
                  margin="30px 0"
                  _onClick={() => {
                    preSignUP();
                  }}
                ></Button>
              </Grid>
            </Grid>
          ) : (
            <PropensityTest TestClose={TestClose} />
          )}
        </SignupModalWrap>
      </Dialog>
    );
  } else {
    return (
      <Dialog maxWidth={"md"} scroll="paper" open={showModal}>
        <LoginModalWrap>
          <Grid
            height="15%"
            bg="#17334a"
            position="relative"
            padding="10px 0 10px 0"
            boxShadow="0 5px 25px rgb(0 0 0 / 15%)"
          >
            <Grid
              position="absolute"
              top="0px"
              right="6%"
              width="3%"
              padding="10px"
            >
              <CloseIcon
                sx={{ color: "#fff", fontSize: 35 }}
                onClick={modalClose}
                cursor="pointer"
              />
            </Grid>
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="40px"
            >
              <Text size="25px" bold color="#fff">
                로그인
              </Text>
            </Grid>
          </Grid>

          <Grid height="80%" padding="20px 0">
            <Grid
              display="flex"
              flexDirection="column"
              alignItems="center"
              position="relative"
              justifyContent="center"
            >
              <Grid margin="20px 0" display="flex" justifyContent="center">
                <img width="40%" src="/img/호랑이.png" />
              </Grid>
              <Title>Welcome to Scope!</Title>
              <Grid display="flex" flexDirection="column">
                <GithubBtn
                  onClick={() => {
                    setShowModal(true);
                    window.location.href =
                      // window.open("", "", "_blank")
                      //s3
                      // process.env.REACT_APP_REDIRECTION_S3_GIT;

                      //local
                      // process.env.REACT_APP_REDIRECTION_LOCAL_GIT;

                      // 최종 주소

                      process.env.REACT_APP_REDIRECTION_SCOPE_GIT;
                  }}
                >
                  깃허브로그인
                </GithubBtn>
                <KakaoBtn
                  onClick={() => {
                    setShowModal(true);
                    // openWindow();
                    window.location.href =
                      //s3
                      // process.env.REACT_APP_REDIRECTION_S3_KAKAO;

                      //local
                      process.env.REACT_APP_REDIRECTION_LOCAL_KAKAO;

                    // 최종 주소
                    // process.env.REACT_APP_REDIRECTION_SCOPE_KAKAO;
                    closeWindow();
                  }}
                >
                  카카오로그인
                </KakaoBtn>
              </Grid>
            </Grid>
          </Grid>

          <Grid display="flex" justifyContent="center" margin="10px 0 30px 0">
            <Grid width="20%" backgroundColor="#17334a" height="3px"></Grid>
          </Grid>
        </LoginModalWrap>
      </Dialog>
    );
  }
};

const Title = styled.h1`
  @media (max-width: 620px) {
    font-size: 20px;
  }
`;
const LoginModalWrap = styled.div`
  width: 550px;
  height: 100%;
  @media (max-width: 620px) {
    width: 310px;
  }
  /* @media (max-width: 375px) {
    width: 250px;
  } */
`;

const SignupModalWrap = styled.div`
  height: 100%;
  width: 550px;

  @media (max-width: 650px) {
    width: 310px;
    height: 550px;
    font-size: 11px;
  }
`;

const GithubBtn = styled.div`
  display: flex;
  width: 282px;
  height: 50px;
  margin: 5px auto;
  border-radius: 25px;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #272e33;
  box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
  cursor: pointer;
  @media (max-width: 620px) {
    width: 170px;
    font-size: 12px;
  }
`;

const KakaoBtn = styled.div`
  display: flex;
  width: 282px;
  height: 50px;
  margin: 5px auto;
  border-radius: 25px;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  color: #606060;
  cursor: pointer;
  background-color: #fae100;
  box-shadow: 0 5px 25px rgb(0 0 0 / 15%);

  @media (max-width: 620px) {
    width: 170px;
    font-size: 12px;
  }
`;

export default LoginModal;
