/* eslint-disable */
// import를 한다.
import React from "react";
import { Dialog } from "@material-ui/core";

import Img from "../images/임시로고.jpg";
import { Grid, Image, Text, Button } from "../elements/Index";
import { postActions } from "../redux/modules/post";
import { myPageActions } from "../redux/modules/myPage";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import styled from "styled-components";
import Markdown from "./Markdown";
import { apis } from "../lib/axios";
import MypagePostList from "./mypagePost/MypagePostList";
import MarkdownRead from "./MarkdownRead";
import { history } from "../redux/configureStore";
import Select from "react-select";
import EmailAuth from "./EmailAuth";
import PropensityTest from "./propensityTest/PropensityTest";

// MyPageInfo의 함수형 컴포넌트를 만든다.
const MyPageInfo = (props) => {
  const dispatch = useDispatch();
  // const userId = useSelector((state) => state.user.userId);
  const userId = props.match.params.id;
  const myUserId = useSelector((state) => state.user.userId);
  // console.log(props);
  console.log(userId);
  console.log(myUserId);

  const [filter, setFilter] = React.useState("소개");
  const [mydata, setMydata] = React.useState();
  const [editMyProfile, setEditMyProfile] = React.useState(false);
  const [techStack, setTeckstack] = React.useState([]);

  const [nickName, setNickName] = React.useState();
  const [email, setEmail] = React.useState();
  // console.log(nickName);
  const myType = mydata?.user.userPropensityType;
  // console.log(myType);
  const [modal, setModal] = React.useState(false);
  const [testmodal, setTestModal] = React.useState(false);
  const [checkEmail, setCheckEmail] = React.useState();

  React.useEffect(() => {
    // dispatch(myPageActions.getMypageAPI(userId));
    dispatch(postActions.isMainPage(false));
    dispatch(postActions.whatPage("myPage"));

    const fetchData = async () => {
      try {
        const result = await apis.getMypage(userId);
        console.log(result);
        setMydata(result.data.data);
        setNickName(result.data.data.user.nickname);
        setEmail(result.data.data.user.email);
        setTeckstack(result.data.data.user.techStackList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [filter, editMyProfile]);
  console.log(techStack);

  const introduction = mydata?.user.introduction ? true : false;
  const recruitmentProject = mydata?.recruitment;
  const inProgressProject = mydata?.inProgress;
  const bookMarkProject = mydata?.bookmark;
  const endProject = mydata?.end;

  console.log(mydata);
  console.log(recruitmentProject);
  console.log(inProgressProject);
  console.log(bookMarkProject);
  console.log(endProject);
  const myInfo = mydata?.user;

  const editProfile = () => {
    setEditMyProfile(true);
  };

  const styles = {
    control: (base, state) => ({
      ...base,
      boxShadow: state.isFocused ? 0 : 0,
      borderWidth: 2,
      minHeight: 40,
      borderColor: state.isFocused ? "#C4C4C4" : base.borderColor,
      "&:hover": {
        borderColor: state.isFocused ? "#C4C4C4" : base.borderColor,
      },
    }),
  };

  function fn_submit(data) {
    let text = data;

    let regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    if (regEmail.test(text) === true) {
      // window.alert("입력된 값은 이메일입니다.");
      let userData = {
        nickname: nickName,
        email: email,
        userTechStack: techStack,
      };
      console.log(userData);
      const fetchData = async () => {
        try {
          const result = await apis.editUserInfo(userId, userData);
          console.log(result);
          setEditMyProfile(false);
          window.alert("수정 완료!");
        } catch (err) {
          console.log(err.response);
          window.alert(err.response.data.msg);
        }
      };
      fetchData();
    } else {
      window.alert("올바른 이메일을 입력해주세요.");
      setCheckEmail(false);
      return;
    }
  }

  const setEditProfile = () => {
    if (techStack.length > 4) {
      window.alert("기술은 4개 까지 선택 가능합니다.");
      return;
    }

    fn_submit(email);
    if (checkEmail === false) {
      return;
    }
  };
  const editProfileCancle = () => {
    setEditMyProfile(false);
  };

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

  const EmailConfirm = () => {
    setModal(true);
  };

  const EditTest = () => {
    setTestModal(true);
  };

  return (
    <React.Fragment>
      {mydata && myType && (
        <>
          <Banner>
            {myType === "LVG" && (
              <BannerTiger>
                <BannerImg src="/img/호랑이배너.jpg"></BannerImg>

                <Grid margin="-150px 0 0 35%">
                  <WhiteP>LVG / 호랑이</WhiteP>
                </Grid>
                <Grid margin="-650px 0 0 90%" zIndex="2">
                  <ConfirmEmail onClick={EmailConfirm}>
                    이메일 인증하기
                  </ConfirmEmail>
                  <EmailAuth modal={modal} setModal={setModal} />
                </Grid>
              </BannerTiger>
            )}
            {myType === "LVP" && (
              <BannerWolf>
                <BannerImg src="/img/늑대배너.jpg"></BannerImg>
                <Grid margin="-150px 0 0 35%">
                  <WhiteP>LVP / 늑대</WhiteP>
                </Grid>
                <Grid margin="-650px 0 0 90%" zIndex="2">
                  <ConfirmEmail onClick={EmailConfirm}>
                    이메일 인증하기
                  </ConfirmEmail>
                  <EmailAuth modal={modal} setModal={setModal} />
                </Grid>
              </BannerWolf>
            )}
            {myType === "LHG" && (
              <BannerFox>
                <BannerImg src="/img/여우배너.jpg"></BannerImg>
                <Grid margin="-150px 0 0 35%">
                  <WhiteP>LHG / 여우</WhiteP>
                </Grid>
                <Grid margin="-650px 0 0 90%" zIndex="2">
                  <ConfirmEmail onClick={EmailConfirm}>
                    이메일 인증하기
                  </ConfirmEmail>
                  <EmailAuth modal={modal} setModal={setModal} />
                </Grid>
              </BannerFox>
            )}
            {myType === "LHP" && (
              <BannerPanda>
                <BannerImg src="/img/팬더배너.jpg"></BannerImg>
                <Grid margin="-150px 0 0 35%">
                  <WhiteP>LHP / 팬더</WhiteP>
                </Grid>
                <Grid margin="-650px 0 0 90%" zIndex="2">
                  <ConfirmEmail onClick={EmailConfirm}>
                    이메일 인증하기
                  </ConfirmEmail>
                  <EmailAuth modal={modal} setModal={setModal} />
                </Grid>
              </BannerPanda>
            )}
            {myType === "FVG" && (
              <BannerRabbit>
                <BannerImg src="/img/토끼배너.jpg"></BannerImg>
                <Grid margin="-150px 0 0 35%">
                  <WhiteP>FVG / 토끼</WhiteP>
                </Grid>
                <Grid margin="-650px 0 0 90%" zIndex="2">
                  <ConfirmEmail onClick={EmailConfirm}>
                    이메일 인증하기
                  </ConfirmEmail>
                  <EmailAuth modal={modal} setModal={setModal} />
                </Grid>
              </BannerRabbit>
            )}
            {myType === "FVP" && (
              <BannerDog>
                <BannerImg src="/img/강아지배너.jpg"></BannerImg>
                <Grid margin="-150px 0 0 35%">
                  <WhiteP>FVP / 강아지</WhiteP>
                </Grid>
                <Grid margin="-650px 0 0 90%" zIndex="2">
                  <ConfirmEmail onClick={EmailConfirm}>
                    이메일 인증하기
                  </ConfirmEmail>
                  <EmailAuth modal={modal} setModal={setModal} />
                </Grid>
              </BannerDog>
            )}
            {myType === "FHG" && (
              <BannerCat>
                <BannerImg src="/img/고양이배너.jpg"></BannerImg>
                <Grid margin="-150px 0 0 35%">
                  <WhiteP>FHG / 고양이</WhiteP>
                </Grid>
                <Grid margin="-650px 0 0 90%" zIndex="2">
                  <ConfirmEmail onClick={EmailConfirm}>
                    이메일 인증하기
                  </ConfirmEmail>
                  <EmailAuth modal={modal} setModal={setModal} />
                </Grid>
              </BannerCat>
            )}
            {myType === "FHP" && (
              <BannerSeal>
                <BannerImg src="/img/물개배너.jpg"></BannerImg>
                <Grid margin="-150px 0 0 35%">
                  <WhiteP>FHP / 물개</WhiteP>
                </Grid>
                <Grid margin="-650px 0 0 90%" zIndex="2">
                  <ConfirmEmail onClick={EmailConfirm}>
                    이메일 인증하기
                  </ConfirmEmail>
                  <EmailAuth modal={modal} setModal={setModal} />
                </Grid>
              </BannerSeal>
            )}
          </Banner>

          <Cards>
            <div style={{}}>
              {myType === "LVG" && <CardImg src="/img/호랑이.png"></CardImg>}
              {myType === "LVP" && (
                <CardImgForWolf src="/img/늑대.png"></CardImgForWolf>
              )}
              {myType === "LHG" && <CardImg src="/img/여우.png"></CardImg>}
              {myType === "LHP" && <CardImg src="/img/판다.png"></CardImg>}
              {myType === "FVG" && <CardImg src="/img/토끼.png"></CardImg>}
              {myType === "FVP" && <CardImg src="/img/개.png"></CardImg>}
              {myType === "FHG" && <CardImg src="/img/고양이.png"></CardImg>}
              {myType === "FHP" && <CardImg src="/img/물개.png"></CardImg>}
            </div>

            {editMyProfile === false && (
              <>
                {/* 닉네임 */}
                <MyInfoText1>
                  <div style={{ width: "150px", marginLeft: "30px" }}>
                    <p>NickName </p>
                  </div>
                  <div style={{ width: "150px" }}>
                    <p>{mydata.user.nickname}</p>
                  </div>
                </MyInfoText1>
                {/* Email */}
                <MyInfoText1>
                  <div
                    style={{
                      width: "150px",
                      marginLeft: "30px",
                    }}
                  >
                    <p>E-mail </p>
                  </div>
                  <div style={{ width: "150px" }}>
                    <p>{mydata.user.email}</p>
                  </div>
                </MyInfoText1>
                {/* 기술 스텍 */}
                <MyInfoText1>
                  <div
                    style={{
                      width: "150px",
                      marginLeft: "30px",
                      height: "150px",
                    }}
                  >
                    <p>TechStack </p>
                  </div>
                  {techStack && (
                    <>
                      <div style={{ width: "150px" }}>
                        {techStack?.map((p, idx) => {
                          return <p key={idx}>{p}</p>;
                        })}
                      </div>
                    </>
                  )}
                </MyInfoText1>
                <Line></Line>
                {/* 진행 프로젝트 */}
                <MyInfoText2>
                  <div style={{ width: "300px", marginLeft: "30px" }}>
                    <p>모집 프로젝트 </p>
                  </div>
                  <div style={{ width: "50px", marginLeft: "100px" }}>
                    <p>{mydata.recruitment.length}</p>
                  </div>
                </MyInfoText2>
                {/* 참여 프로젝트 */}
                <MyInfoText2>
                  <div style={{ width: "300px", marginLeft: "30px" }}>
                    <p>진행 프로젝트 </p>
                  </div>
                  <div style={{ width: "50px", marginLeft: "100px" }}>
                    <p>{mydata.inProgress.length}</p>
                  </div>
                </MyInfoText2>
                {/* 마감 프로젝트 */}
                <MyInfoText2>
                  <div style={{ width: "300px", marginLeft: "30px" }}>
                    <p>완료 프로젝트 </p>
                  </div>
                  <div style={{ width: "50px", marginLeft: "100px" }}>
                    <p>{mydata.end.length}</p>
                  </div>
                </MyInfoText2>
                <Button
                  margin="15px auto 15px 36%"
                  height="40px"
                  backgroundColor="#170184"
                  width="132px"
                  text="프로필 수정하기"
                  _onClick={editProfile}
                ></Button>
              </>
            )}
            {editMyProfile === true && (
              <>
                {/* 닉네임 */}
                <MyInfoText1>
                  <div style={{ width: "90px", marginLeft: "30px" }}>
                    <p>NickName </p>
                  </div>
                  <div style={{ width: "150px", alignItems: "center" }}>
                    <input
                      style={{
                        borderRadius: "5px",
                        borderColor: "#707070",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                        appearance: "none",
                        color: "#707070",
                        border: "1px solid #707070",
                        outlineStyle: "none",
                        margin: "13px 0 0 0",
                        width: "150px",
                        padding: "7px",
                      }}
                      defaultValue={mydata.user.nickname}
                      onChange={(e) => {
                        setNickName(e.target.value);
                      }}
                    ></input>
                  </div>
                </MyInfoText1>

                {/* 이메일 */}
                <MyInfoText1>
                  <div
                    style={{
                      width: "90px",
                      marginLeft: "30px",
                      height: "80px",
                    }}
                  >
                    <p style={{ marginTop: "20px" }}>E-mail </p>
                  </div>
                  <div style={{ width: "150px" }}>
                    <input
                      style={{
                        borderRadius: "5px",
                        borderColor: "#707070",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                        appearance: "none",
                        color: "#707070",
                        border: "1px solid #707070",
                        outlineStyle: "none",
                        margin: "15px 0 0 0",
                        width: "150px",
                        padding: "7px",
                      }}
                      defaultValue={mydata.user.email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                  </div>
                </MyInfoText1>
                <MyInfoText1>
                  <Grid height="100px" display="flex" width="100%">
                    <div
                      style={{
                        width: "90px",
                        marginLeft: "30px",
                        height: "50px",
                      }}
                    >
                      <p style={{}}>TechStack </p>
                    </div>
                    <Select
                      isMulti
                      name="techStack"
                      options={techStackOption}
                      styles={styles}
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
                        console.log(techStack);
                      }}
                    >
                      기술스택
                    </Select>
                  </Grid>
                </MyInfoText1>
                <Line></Line>
                {/* 진행 프로젝트 */}
                <MyInfoText2>
                  <div style={{ width: "150px", marginLeft: "30px" }}></div>
                  <div style={{ width: "50px", marginLeft: "100px" }}></div>
                </MyInfoText2>
                {/* 참여 프로젝트 */}
                <MyInfoText2>
                  <div style={{ width: "150px", marginLeft: "30px" }}></div>
                  <div style={{ width: "50px", marginLeft: "100px" }}></div>
                </MyInfoText2>
                {/* 마감 프로젝트 */}
                <MyInfoText2>
                  <div style={{ width: "150px", marginLeft: "30px" }}></div>
                  <div style={{ width: "50px", marginLeft: "100px" }}></div>
                </MyInfoText2>
                <div style={{ display: "flex" }}>
                  <Button
                    margin="15px auto 15px 3%"
                    height="40px"
                    backgroundColor="#170184"
                    width="132px"
                    text="프로필 저장하기"
                    _onClick={setEditProfile}
                  ></Button>
                  <Button
                    margin="15px auto 15px 3%"
                    height="40px"
                    backgroundColor="#170184"
                    width="132px"
                    text="취소하기"
                    _onClick={editProfileCancle}
                  ></Button>
                </div>
              </>
            )}
          </Cards>

          {myType === "LVG" && ( //호랑이
            <>
              <Grid
                margin="-1000px 0 0 33%"
                display="flex"
                width="50.3%"
                justifyContent="space-between"
              >
                <MyResultDiv>
                  <MyResultText>리더</MyResultText>
                  <MyResultText>수직</MyResultText>
                  <MyResultText>결과</MyResultText>
                </MyResultDiv>
                {userId == myUserId && (
                  <Grid>
                    <GotoTest onClick={EditTest}>성향 테스트하기⇀</GotoTest>
                  </Grid>
                )}
                <Dialog maxWidth={"sm"} scroll="paper" open={testmodal}>
                  <Grid width="550px" height="100%">
                    <PropensityTest />
                  </Grid>
                </Dialog>
              </Grid>
              <Grid margin="0 0 0 33.5%" width="600px">
                <Grid display="flex" width="600px">
                  <MyResultText2>리더형인 당신은 &nbsp; </MyResultText2>
                  <MyResultTextBold>리더 이지만 수직적 리더십</MyResultTextBold>
                  <MyResultText2>을 원해요!</MyResultText2>
                </Grid>
                <Grid display="flex" width="600px">
                  <MyResultText2>
                    과정보다는 결과를 중요시하는 당신은 우리 스코프 사이드
                    프로젝트에 적합한 사람!
                  </MyResultText2>
                </Grid>
              </Grid>
            </>
          )}

          {myType === "LVP" && ( //늑대
            <>
              <Grid
                margin="-1000px 0 0 33%"
                display="flex"
                width="50.3%"
                justifyContent="space-between"
              >
                <MyResultDiv>
                  <MyResultText>리더</MyResultText>
                  <MyResultText>수직</MyResultText>
                  <MyResultText>과정</MyResultText>
                </MyResultDiv>
                {userId == myUserId && (
                  <Grid>
                    <GotoTest onClick={EditTest}>성향 테스트하기⇀</GotoTest>
                  </Grid>
                )}
                <Dialog maxWidth={"sm"} scroll="paper" open={testmodal}>
                  <Grid width="550px" height="100%">
                    <PropensityTest />
                  </Grid>
                </Dialog>
              </Grid>
              <Grid margin="0 0 0 33.5%" width="600px">
                <Grid display="flex" width="600px">
                  <MyResultText2>리더형인 당신은 &nbsp; </MyResultText2>
                  <MyResultTextBold>리더 이지만 수직적 리더십</MyResultTextBold>
                  <MyResultText2>을 원해요!</MyResultText2>
                </Grid>
                <Grid display="flex" width="600px">
                  <MyResultText2>
                    결과보다는 과정을 중요시하는 당신은 우리 스코프 사이드
                    프로젝트에 적합한 사람!
                  </MyResultText2>
                </Grid>
              </Grid>
            </>
          )}
          {myType === "LHG" && ( //여우
            <>
              <Grid
                margin="-1000px 0 0 33%"
                display="flex"
                width="50.3%"
                justifyContent="space-between"
              >
                <MyResultDiv>
                  <MyResultText>리더</MyResultText>
                  <MyResultText>수평</MyResultText>
                  <MyResultText>결과</MyResultText>
                </MyResultDiv>
                {userId == myUserId && (
                  <Grid>
                    <GotoTest onClick={EditTest}>성향 테스트하기⇀</GotoTest>
                  </Grid>
                )}
                <Dialog maxWidth={"sm"} scroll="paper" open={testmodal}>
                  <Grid width="550px" height="100%">
                    <PropensityTest />
                  </Grid>
                </Dialog>
              </Grid>
              <Grid margin="0 0 0 33.5%" width="600px">
                <Grid display="flex" width="600px">
                  <MyResultText2>리더형인 당신은 &nbsp; </MyResultText2>
                  <MyResultTextBold>리더 이지만 수평적 리더십</MyResultTextBold>
                  <MyResultText2>을 원해요!</MyResultText2>
                </Grid>
                <Grid display="flex" width="600px">
                  <MyResultText2>
                    과정보다는 결과를 중요시하는 당신은 우리 스코프 사이드
                    프로젝트에 적합한 사람!
                  </MyResultText2>
                </Grid>
              </Grid>
            </>
          )}

          {myType === "LHP" && ( // 팬더
            <>
              <Grid
                margin="-1000px 0 0 33%"
                display="flex"
                width="50.3%"
                justifyContent="space-between"
              >
                <MyResultDiv>
                  <MyResultText>리더</MyResultText>
                  <MyResultText>수평</MyResultText>
                  <MyResultText>과정</MyResultText>
                </MyResultDiv>
                {userId == myUserId && (
                  <Grid>
                    <GotoTest onClick={EditTest}>성향 테스트하기⇀</GotoTest>
                  </Grid>
                )}
                <Dialog maxWidth={"sm"} scroll="paper" open={testmodal}>
                  <Grid width="550px" height="100%">
                    <PropensityTest />
                  </Grid>
                </Dialog>
              </Grid>
              <Grid margin="0 0 0 33.5%" width="600px">
                <Grid display="flex" width="600px">
                  <MyResultText2>리더형인 당신은 &nbsp; </MyResultText2>
                  <MyResultTextBold>리더 이지만 수평적 리더십</MyResultTextBold>
                  <MyResultText2>을 원해요!</MyResultText2>
                </Grid>
                <Grid display="flex" width="600px">
                  <MyResultText2>
                    결과보다는 과정을 중요시하는 당신은 우리 스코프 사이드
                    프로젝트에 적합한 사람!
                  </MyResultText2>
                </Grid>
              </Grid>
            </>
          )}
          {myType === "FVG" && ( // 토끼
            <>
              <Grid
                margin="-1000px 0 0 33%"
                display="flex"
                width="50.3%"
                justifyContent="space-between"
              >
                <MyResultDiv>
                  <MyResultText>팔로워</MyResultText>
                  <MyResultText>수직</MyResultText>
                  <MyResultText>결과</MyResultText>
                </MyResultDiv>
                {userId == myUserId && (
                  <Grid>
                    <GotoTest onClick={EditTest}>성향 테스트하기⇀</GotoTest>
                  </Grid>
                )}
                <Dialog maxWidth={"sm"} scroll="paper" open={testmodal}>
                  <Grid width="550px" height="100%">
                    <PropensityTest />
                  </Grid>
                </Dialog>
              </Grid>
              <Grid margin="0 0 0 33.5%" width="600px">
                <Grid display="flex" width="600px">
                  <MyResultText2>팔로우형 당신은 &nbsp; </MyResultText2>
                  <MyResultTextBold>
                    팔로워 이지만 수직적 팔로워십
                  </MyResultTextBold>
                  <MyResultText2>을 원해요!</MyResultText2>
                </Grid>
                <Grid display="flex" width="600px">
                  <MyResultText2>
                    과정보다는 결과를 중요시하는 당신은 우리 스코프 사이드
                    프로젝트에 적합한 사람!
                  </MyResultText2>
                </Grid>
              </Grid>
            </>
          )}
          {myType === "FVP" && ( // 강아지
            <>
              <Grid
                margin="-1000px 0 0 33%"
                display="flex"
                width="50.3%"
                justifyContent="space-between"
              >
                <MyResultDiv>
                  <MyResultText>팔로워</MyResultText>
                  <MyResultText>수직</MyResultText>
                  <MyResultText>과정</MyResultText>
                </MyResultDiv>
                {userId == myUserId && (
                  <Grid>
                    <GotoTest onClick={EditTest}>성향 테스트하기⇀</GotoTest>
                  </Grid>
                )}
                <Dialog maxWidth={"sm"} scroll="paper" open={testmodal}>
                  <Grid width="550px" height="100%">
                    <PropensityTest />
                  </Grid>
                </Dialog>
              </Grid>
              <Grid margin="0 0 0 33.5%" width="600px">
                <Grid display="flex" width="600px">
                  <MyResultText2>팔로우형 당신은 &nbsp; </MyResultText2>
                  <MyResultTextBold>
                    팔로워 이지만 수직적 팔로워십
                  </MyResultTextBold>
                  <MyResultText2>을 원해요!</MyResultText2>
                </Grid>
                <Grid display="flex" width="600px">
                  <MyResultText2>
                    결과보다는 과정을 중요시하는 당신은 우리 스코프 사이드
                    프로젝트에 적합한 사람!
                  </MyResultText2>
                </Grid>
              </Grid>
            </>
          )}
          {myType === "FHG" && ( // 고양이
            <>
              <Grid
                margin="-1000px 0 0 33%"
                display="flex"
                width="50.3%"
                justifyContent="space-between"
              >
                <MyResultDiv>
                  <MyResultText>팔로워</MyResultText>
                  <MyResultText>수평</MyResultText>
                  <MyResultText>결과</MyResultText>
                </MyResultDiv>
                {userId == myUserId && (
                  <Grid>
                    <GotoTest onClick={EditTest}>성향 테스트하기⇀</GotoTest>
                  </Grid>
                )}
                <Dialog maxWidth={"sm"} scroll="paper" open={testmodal}>
                  <Grid width="550px" height="100%">
                    <PropensityTest />
                  </Grid>
                </Dialog>
              </Grid>
              <Grid margin="0 0 0 33.5%" width="600px">
                <Grid display="flex" width="600px">
                  <MyResultText2>팔로우형 당신은 &nbsp; </MyResultText2>
                  <MyResultTextBold>
                    팔로워 이지만 수평적 팔로워십
                  </MyResultTextBold>
                  <MyResultText2>을 원해요!</MyResultText2>
                </Grid>
                <Grid display="flex" width="600px">
                  <MyResultText2>
                    과정보다는 결과를 중요시하는 당신은 우리 스코프 사이드
                    프로젝트에 적합한 사람!
                  </MyResultText2>
                </Grid>
              </Grid>
            </>
          )}
          {myType === "FHP" && ( // 물개
            <>
              <Grid
                margin="-1000px 0 0 33%"
                display="flex"
                width="50.3%"
                justifyContent="space-between"
              >
                <MyResultDiv>
                  <MyResultText>팔로워</MyResultText>
                  <MyResultText>수평</MyResultText>
                  <MyResultText>과정</MyResultText>
                </MyResultDiv>
                {userId == myUserId && (
                  <Grid>
                    <GotoTest onClick={EditTest}>성향 테스트하기⇀</GotoTest>
                  </Grid>
                )}
                <Dialog maxWidth={"sm"} scroll="paper" open={testmodal}>
                  <Grid width="550px" height="100%">
                    <PropensityTest />
                  </Grid>
                </Dialog>
              </Grid>
              <Grid margin="0 0 0 33.5%" width="600px">
                <Grid display="flex" width="600px">
                  <MyResultText2>팔로우형 당신은 &nbsp; </MyResultText2>
                  <MyResultTextBold>
                    팔로워 이지만 수평적 팔로워십
                  </MyResultTextBold>
                  <MyResultText2>을 원해요!</MyResultText2>
                </Grid>
                <Grid display="flex" width="600px">
                  <MyResultText2>
                    결과보다는 과정을 중요시하는 당신은 우리 스코프 사이드
                    프로젝트에 적합한 사람!
                  </MyResultText2>
                </Grid>
              </Grid>
            </>
          )}

          <Grid
            display="flex"
            margin="auto"
            justifyContent="center"
            margin="0px 0 0 150px"
            width="auto"
          >
            <Filter
              onClick={() => {
                setFilter("모집");
              }}
            >
              모집
            </Filter>
            <Filter
              onClick={() => {
                setFilter("진행중");
              }}
            >
              진행중
            </Filter>
            <Filter
              onClick={() => {
                setFilter("관심");
              }}
            >
              관심
            </Filter>
            <Filter
              onClick={() => {
                setFilter("완료");
              }}
            >
              완료
            </Filter>
            <Filter
              onClick={() => {
                setFilter("소개");
              }}
            >
              소개
            </Filter>
          </Grid>

          {filter === "모집" && (
            <MypagePostList {...recruitmentProject}></MypagePostList>
          )}
          {filter === "진행중" && (
            <MypagePostList {...inProgressProject}></MypagePostList>
          )}
          {filter === "관심" && (
            <MypagePostList {...bookMarkProject}></MypagePostList>
          )}
          {filter === "완료" && (
            <MypagePostList {...endProject}></MypagePostList>
          )}
          {filter === "소개" && (
            <button
              style={{
                float: "right",
                margin: "10px 18% 0 0",
                border: "none",
                cursor: "pointer",
                backgroundColor: " transparent ",
              }}
              onClick={() => {
                history.push({
                  pathname: "/addmarkdown",
                  state: { userId: userId },
                });
              }}
            >
              <img
                src="/img/소개글.png"
                style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              />
            </button>
          )}
          <Grid margin="0 0 0 34%" width="49%" border="1px solid #707070 ">
            {filter === "소개" && introduction === true && (
              <MarkdownRead
                introduction={mydata?.user.introduction}
              ></MarkdownRead>
            )}
          </Grid>
        </>
      )}
    </React.Fragment>
  );
};

const Filter = styled.p`
  margin-left: 10%;
  margin-top: 100px;
  margin-bottom: 50px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    text-decoration: underline;
    color: #737373;
  }
  @media screen and (max-width: 1400px) {
    /* margin-top: 1050px; */
  }
  @media screen and (max-width: 750px) {
    /* margin-top: 1050px; */
  } ;
`;

const Cards = styled.div`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  margin: -220px 0 -600px 55px;
  width: 505px;
  height: 1300px;
  /* background-color: rgba(255, 255, 255, 0); */
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  z-index: 1;
  position: relative;
  @media screen and (max-width: 1600px) {
    width: 400px;
  }
  @media screen and (max-width: 370px) {
    width: 250px;
    margin-right: 250px;
  }
`;

const MyInfoText1 = styled.div`
  font-size: 14px;
  display: flex;
  color: #737373;
`;
const MyInfoText2 = styled.div`
  font-size: 14px;
  display: flex;
  color: #737373;
`;

const Line = styled.hr`
  width: 80%;
  color: black;
`;

const CardImg = styled.img`
  width: 160%;
  height: 100%;
  object-fit: cover;
  position: relative;
  right: 60px;
`;
const CardImgForWolf = styled.img`
  width: 160%;
  height: 100%;
  object-fit: cover;
  position: relative;
  right: 0px;
  bottom: 50px;
`;
const Banner = styled.div`
  width: 100%;
  margin: -100px auto;
  display: flex;
  height: 650px;
  overflow: hidden;
`;
const BannerImg = styled.img`
  object-fit: cover;
  /* width: 1200px;
  height: 180%;
  margin: auto auto auto 20%; */
`;

const BannerTiger = styled.div`
  width: 100%;
  background-color: #eed691;
  /* opacity: 0.5; */

  z-index: 0;
`;

const BannerWolf = styled.div`
  width: 100%;
  background-color: #afa9a0;
  /* opacity: 0.5; */
  z-index: 0;
`;

const BannerFox = styled.div`
  width: 100%;
  background-color: #e4812a;
  /* opacity: 0.5; */
  z-index: 0;
`;

const BannerPanda = styled.div`
  width: 100%;
  background-color: #9c9c9c;
  /* background-color: black; */
  /* opacity: 0.7; */
  /* background-color: rgba(0, 0, 0, 0.5); 까만색(0,0,0) 80% 투명도 */
  z-index: 0;
`;

const BannerRabbit = styled.div`
  width: 100%;
  background-color: #998fc9;
  /* opacity: 0.5; */
  z-index: 0;
`;

const BannerDog = styled.div`
  width: 100%;
  background-color: #e8ddb8;
  /* opacity: 0.5; */
  z-index: 0;
`;
const BannerCat = styled.div`
  width: 100%;
  background-color: #6d6e72;
  /* opacity: 0.5; */
  z-index: 0;
`;

const BannerSeal = styled.div`
  width: 100%;
  background-color: #a9adb3;
  /* opacity: 0.5; */
  z-index: 0;
`;
const Blur = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  z-index: 0;
`;

const WhiteP = styled.p`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;
const ConfirmEmail = styled.button`
  width: 160px;
  padding: 8px 20px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  border-radius: 10px;
  z-index: 99999;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: white;
    opacity: 0.7;
  }

  @media screen and (max-width: 750px) {
    color: black;
  } ;
`;

const MyResultDiv = styled.div`
  display: flex;
  width: auto;

  @media screen and (max-width: 1400px) {
    margin-top: 1100px;
  }
  @media screen and (max-width: 750px) {
    margin-top: 1100px;
  } ;
`;

const MyResultText = styled.div`
  width: 70px;
  height: 40px;
  border-radius: 12px;
  background-color: #b29cf4;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const GotoTest = styled.p`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  float: right;
`;
const MyResultText2 = styled.p`
  color: #707070;
  font-size: 15px;
`;
const MyResultTextBold = styled.p`
  color: black;
  font-size: 15px;
  font-weight: bold;
`;
export default MyPageInfo;
