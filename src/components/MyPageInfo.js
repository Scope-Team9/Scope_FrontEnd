/* eslint-disable */

// 나의 마이페이지에서 뜨는 버튼들과 다른사람 마이페이지에서 뜨는 버튼들
// import를 한다.
import React from "react";
import { Grid, Button } from "../elements/Index";
import { postActions } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { apis } from "../lib/axios";
import MypagePostList from "./mypagePost/MypagePostList";
import MarkdownRead from "./MarkdownRead";
import { history } from "../redux/configureStore";
import Spinner from "../shared/Spinner";
import Banners from "./myPage/Banners";
import MypageCard from "./myPage/MypageCard";
import TypeResultTest from "./myPage/TypeResultTest";
import MypageFilter from "./myPage/MypageFilter";
import { pageCheckAction } from "../redux/modules/pageCheck";

// MyPageInfo의 함수형 컴포넌트를 만든다.
const MyPageInfo = (props) => {
  const dispatch = useDispatch();
  const userId = props.match.params.id;
  const myUserId = useSelector((state) => state.user.userId);
  const checkApply = useSelector((state) => state.apply);
  const [filter, setFilter] = React.useState("소개");
  const [mydata, setMydata] = React.useState();
  const [editMyProfile, setEditMyProfile] = React.useState(false); // 내려줘야함
  const [techStack, setTeckstack] = React.useState([]);
  const [nickName, setNickName] = React.useState();
  const [email, setEmail] = React.useState();
  const [myType, setMyType] = React.useState();
  // const myType = mydata?.user.userPropensityType;
  const [modal, setModal] = React.useState(false);
  const [testmodal, setTestModal] = React.useState(false);
  const [assessment, setAssessment] = React.useState(false);

  const [introduction, setIntroduction] = React.useState();
  const [recruitmentProject, setRecruitmentProject] = React.useState();
  const [inProgressProject, setInProgressProject] = React.useState();
  const [bookMarkProject, setBookMarkProject] = React.useState();
  const [endProject, setEndProject] = React.useState();

  const [loading, setLoading] = React.useState(true);

  //사용자 추천 모달 열기/닫기
  const doSetAssessment = () => {
    setAssessment(!assessment);
  };
  //필터
  const SetFilter = (data) => {
    setFilter(data);
  };

  const checkMydata = () => {
    setMydata(null);
  };

  //모달 관련
  React.useEffect(() => {
    setMydata(null);
    setEndProject(null);
    setMyType(null);

    dispatch(postActions.isMainPage(false));
    dispatch(postActions.whatPage("myPage"));
    const fetchData = async () => {
      try {
        const result = await apis.getMypage(userId);

        setEndProject(result.data.data.end);
        setMyType(result.data.data.user.userPropensityType);
        setMydata(result.data.data);
        dispatch(pageCheckAction.getPageCheck(`/mypage/${userId}`));

        setLoading(false);
      } catch (err) {}
    };
    fetchData();
  }, [assessment, testmodal, checkApply]);

  //프로필 수정 관련
  React.useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apis.getMypage(userId);

        setNickName(result.data.data.user.nickname);
        setEmail(result.data.data.user.email);
        setTeckstack(result.data.data.user.techStackList);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [editMyProfile]);

  //필터 및 포스트 관련
  React.useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apis.getMypage(userId);
        setRecruitmentProject(result.data.data.recruitment);
        setInProgressProject(result.data.data.inProgress);
        setBookMarkProject(result.data.data.bookmark);
        setEndProject(result.data.data.end);
        setIntroduction(result.data.data.user.introduction);
        setMyType(result.data.data.user.userPropensityType);

        setMydata(result.data.data);
        dispatch(pageCheckAction.getPageCheck(`/mypage/${userId}`));

        setLoading(false);
      } catch (err) {}
    };
    fetchData();
  }, [filter]);
  //이메일 모달
  const EmailConfirm = () => {
    setModal(true);
  };
  //테스트 모달
  const EditTest = () => {
    setTestModal(true);
  };
  //테스트 모달 close
  const TestClose = () => {
    setTestModal(false);
  };

  const EditProfile = () => {
    setEditMyProfile(true);
  };

  const editProfileCancle = () => {
    setEditMyProfile(false);
  };
  //마이페이지에서 마이페이지 이동
  React.useLayoutEffect(() => {}, [props.goMypage]);

  return (
    <Grid margin="0 0 250px 0">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {mydata && myType && endProject && (
            <Grid className="전체페이지" maxWidth="1400px" margin="auto">
              <Grid height="30%" position="relative">
                <Banner>
                  <Banners type={myType} myPage={mydata?.isMyMypage}></Banners>
                  <Grid position="absolute" top="120px" height="75%">
                    <TypeResultTest
                      myType={myType}
                      userId={userId}
                      myUserId={myUserId}
                      mydata={mydata}
                      testmodal={testmodal}
                      EditTest={EditTest}
                      TestClose={TestClose}
                      setModal={setModal}
                      nickName={nickName}
                      modal={modal}
                      mypage={mydata.isMyMypage}
                      onClick={() => {
                        EmailConfirm();
                      }}
                    />
                  </Grid>
                </Banner>
              </Grid>
              <Grid width="340px" height="10px" position="relative">
                <MypageCard
                  setEditMyProfile={setEditMyProfile}
                  editMyProfile={editMyProfile}
                  mydata={mydata}
                  myType={myType}
                  myUserId={myUserId}
                  userId={userId}
                  nickName={nickName}
                  email={email}
                  techStack={techStack}
                  onClick={EditProfile}
                  onClick2={editProfileCancle}
                />
              </Grid>
              <Grid margin="100px 0 0 0 ">
                <FilterWrap>
                  <MypageFilter filter={filter} onClicks={SetFilter} />
                </FilterWrap>

                {filter === "모집" && (
                  <MypagePostList post={recruitmentProject}></MypagePostList>
                )}

                <IntroduceWrap>
                  {filter === "모집" && recruitmentProject.length === 0 && (
                    <>
                      <NoIntroduction src="/img/소개글너구리.png"></NoIntroduction>
                      <NoIntroductionText>
                        프로젝트가 아직 없네요.
                      </NoIntroductionText>
                    </>
                  )}
                </IntroduceWrap>

                {filter === "진행" && (
                  <MypagePostList post={inProgressProject}></MypagePostList>
                )}
                <IntroduceWrap>
                  {filter === "진행" && inProgressProject.length === 0 && (
                    <>
                      <NoIntroduction src="/img/소개글너구리.png"></NoIntroduction>
                      <NoIntroductionText>
                        프로젝트가 아직 없네요.
                      </NoIntroductionText>
                    </>
                  )}
                </IntroduceWrap>
                {filter === "관심" && (
                  <MypagePostList post={bookMarkProject}></MypagePostList>
                )}
                <IntroduceWrap>
                  {filter === "관심" && bookMarkProject.length === 0 && (
                    <>
                      <NoIntroduction src="/img/소개글너구리.png"></NoIntroduction>
                      <NoIntroductionText>
                        프로젝트가 아직 없네요.
                      </NoIntroductionText>
                    </>
                  )}
                </IntroduceWrap>
                {filter === "완료" && (
                  <MypagePostList
                    post={endProject}
                    myUserId={myUserId}
                    assessment={assessment}
                    doSetAssessment={doSetAssessment}
                    checkMydata={checkMydata}
                  ></MypagePostList>
                )}
                <IntroduceWrap margin="0 0 0 25%" width="49%">
                  {filter === "완료" && endProject.length === 0 && (
                    <>
                      <NoIntroduction src="/img/소개글너구리.png"></NoIntroduction>
                      <NoIntroductionText>
                        프로젝트가 아직 없네요.
                      </NoIntroductionText>
                    </>
                  )}
                </IntroduceWrap>

                <IntroduceWrap>
                  {filter === "소개" &&
                    mydata?.isMyMypage === true &&
                    introduction !== "" && (
                      <button
                        style={{
                          float: "right",
                          margin: "1% 1% 0 0",
                          border: "none",
                          borderRadius: "15px",
                          cursor: "pointer",
                          backgroundColor: " #fff ",
                          position: "relative",
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
                  {filter === "소개" && introduction !== "" && (
                    <Grid margin="50px 0 0 0" border="1px solid #707070 ">
                      <MarkdownRead
                        introduction={mydata?.user.introduction}
                      ></MarkdownRead>
                    </Grid>
                  )}
                </IntroduceWrap>
                <IntroduceWrap>
                  {filter === "소개" && introduction === "" && (
                    <>
                      <NoIntroduction src="/img/소개글너구리.png"></NoIntroduction>
                      <NoIntroductionText>
                        작성된 소개가 없네요.
                      </NoIntroductionText>
                      <NoIntroductionText2>
                        소개글 작성은 PC환경에서 가능합니다.
                      </NoIntroductionText2>
                      {mydata?.isMyMypage === true && (
                        <>
                          <IntroduceBtn>
                            <Button
                              _onClick={() => {
                                history.push({
                                  pathname: "/addmarkdown",
                                  state: { userId: userId },
                                });
                              }}
                            >
                              {" "}
                              소개글 작성하기
                            </Button>
                          </IntroduceBtn>
                          {/* <NoticeText>
                            소개 작성은 PC환경에서 작성 가능합니다.
                          </NoticeText> */}
                        </>
                      )}
                    </>
                  )}
                </IntroduceWrap>
              </Grid>
              {/* 소개글 있거나 없거나 */}
            </Grid>
          )}
          {/* //  mydata와 myType가 있을때 */}
        </>
        // 스피너를 감싸는 친구
      )}
      {/* 스피너를 감싸는 괄호 */}
    </Grid>
  );
};

const Banner = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: -100px auto;
  display: flex;
  height: 457px;
  overflow: hidden;
`;

const FilterWrap = styled.div`
  display: flex;
  margin-left: 35%;
  width: 870px;
  max-width: 1400px;
  z-index: 999;

  @media screen and (max-width: 1200px) {
    width: 90vw;
    justify-content: center;
    margin: auto;
  }
`;

const IntroduceWrap = styled.div`
  margin-left: 37%;
  width: 60vw;
  max-width: 780px;

  @media screen and (max-width: 1200px) {
    width: 90vw;
    justify-content: center;
    margin: auto;
  }
`;

const NoIntroduction = styled.img`
  width: 40%;
  height: 40%;
  object-fit: cover;
  position: relative;
  margin-left: 27%;
  display: flex;
  justify-content: center;
`;
const NoIntroductionText = styled.p`
  color: #737373;
  font-size: 25px;
  width: auto;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const NoIntroductionText2 = styled.p`
  display: none;
  @media screen and (max-width: 375px) {
    color: #737373;
    font-size: 12px;
    width: auto;
    align-items: center;
    display: flex;
    justify-content: center;
  } ;
`;

const IntroduceBtn = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 150px;
  @media screen and (max-width: 400px) {
    display: none;
  } ;
`;

export default MyPageInfo;
