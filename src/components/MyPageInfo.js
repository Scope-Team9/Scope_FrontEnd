/* eslint-disable */

// 나의 마이페이지에서 뜨는 버튼들과 다른사람 마이페이지에서 뜨는 버튼들
// import를 한다.
import React from "react";
import { Grid, Image, Text, Button } from "../elements/Index";
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
const MyPageInfo = props => {
  const dispatch = useDispatch();
  const userId = props.match.params.id;

  const myUserId = useSelector(state => state.user.userId);
  const [myUrl, setMyUrl] = React.useState();
  const [filter, setFilter] = React.useState("소개");
  const [mydata, setMydata] = React.useState();
  const [editMyProfile, setEditMyProfile] = React.useState(false); // 내려줘야함
  const [techStack, setTeckstack] = React.useState([]); //
  const [nickName, setNickName] = React.useState(); //
  const [email, setEmail] = React.useState(); //
  const myType = mydata?.user.userPropensityType;
  const [modal, setModal] = React.useState(false);
  const [testmodal, setTestModal] = React.useState(false);

  const [memberId, setMemberId] = React.useState(); //멤버아이디
  const [writerEquals, setWriterEquals] = React.useState(); //포스트의 작성자확인

  const pageCheck = useSelector(state => state.pagecheck.pageGo);

  //click
  const introduction = mydata?.user.introduction ? true : false;

  const recruitmentProject = mydata?.recruitment;
  const inProgressProject = mydata?.inProgress;
  const bookMarkProject = mydata?.bookmark;
  const endProject = mydata?.end;

  const [loading, setLoading] = React.useState(true);

  const SetFilter = data => {
    setFilter(data);
  };

  React.useLayoutEffect(() => {
    // dispatch(myPageActions.getMypageAPI(userId));
    // console.log(editMyProfile);
    // setEmail(null);
    // setNickName(null);
    // console.log(pageCheck);

    dispatch(postActions.isMainPage(false));
    dispatch(postActions.whatPage("myPage"));
    const fetchData = async () => {
      try {
        const result = await apis.getMypage(userId);
        // console.log("마이페이지 몇번?", result);
        // setMydata(result.data.data);
        setNickName(result.data.data.user.nickname);
        setEmail(result.data.data.user.email);
        setTeckstack(result.data.data.user.techStackList);
        setLoading(false);

        // console.log(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    // console.log(mydata);
  }, [editMyProfile, testmodal]);

  React.useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apis.getMypage(userId);
        console.log(result);
        setMydata(result.data.data);
        dispatch(pageCheckAction.getPageCheck(`/mypage/${userId}`));
        console.log(props.goMypage);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    // console.log(mydata);
  }, [filter]);

  const EmailConfirm = () => {
    setModal(true);
  };

  const EditTest = () => {
    setTestModal(true);
  };

  const TestClose = () => {
    setTestModal(false);
  };

  const EditProfile = () => {
    setEditMyProfile(true);
  };

  const editProfileCancle = () => {
    setEditMyProfile(false);
  };

  React.useLayoutEffect(() => {}, [props.goMypage]);

  return (
    <Grid margin="0 0 250px 0">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {mydata && myType && (
            <Grid className="전체페이지" maxWidth="1900px" margin="auto">
              <Grid height="30%" position="relative">
                <Banner>
                  <Banners
                    type={myType}
                    myPage={mydata?.isMyMypage}
                    // setModal={setModal}
                    // modal={modal}
                    // onClick={() => {
                    //   EmailConfirm();
                    // }}
                  ></Banners>
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
                      modal={modal}
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
                  <MypagePostList {...recruitmentProject}></MypagePostList>
                )}

                <Grid margin="0 0 0 25%" width="49%">
                  {filter === "모집" && recruitmentProject.length === 0 && (
                    <>
                      <NoIntroduction src="/img/소개글너구리.png"></NoIntroduction>
                      <NoIntroductionText>
                        프로젝트가 아직 없네요.
                      </NoIntroductionText>
                    </>
                  )}
                </Grid>

                {filter === "진행" && (
                  <MypagePostList {...inProgressProject}></MypagePostList>
                )}
                <Grid margin="0 0 0 25%" width="49%">
                  {filter === "진행" && inProgressProject.length === 0 && (
                    <>
                      <NoIntroduction src="/img/소개글너구리.png"></NoIntroduction>
                      <NoIntroductionText>
                        프로젝트가 아직 없네요.
                      </NoIntroductionText>
                    </>
                  )}
                </Grid>
                {filter === "관심" && (
                  <MypagePostList {...bookMarkProject}></MypagePostList>
                )}
                <Grid margin="0 0 0 25%" width="49%">
                  {filter === "관심" && bookMarkProject.length === 0 && (
                    <>
                      <NoIntroduction src="/img/소개글너구리.png"></NoIntroduction>
                      <NoIntroductionText>
                        프로젝트가 아직 없네요.
                      </NoIntroductionText>
                    </>
                  )}
                </Grid>
                {filter === "완료" && (
                  <MypagePostList {...endProject}></MypagePostList>
                )}
                <Grid margin="0 0 0 25%" width="49%">
                  {filter === "완료" && endProject.length === 0 && (
                    <>
                      <NoIntroduction src="/img/소개글너구리.png"></NoIntroduction>
                      <NoIntroductionText>
                        프로젝트가 아직 없네요.
                      </NoIntroductionText>
                    </>
                  )}
                </Grid>
                {filter === "소개" &&
                  mydata?.isMyMypage === true &&
                  introduction === true && (
                    <button
                      style={{
                        float: "right",
                        margin: "55px 18% 0 0",
                        border: "none",
                        borderRadius: "15px",
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
                <Grid margin="0 0 0 34%" width="49%">
                  {filter === "소개" && introduction === true && (
                    <Grid margin="50px 0 0 0" border="1px solid #707070 ">
                      <MarkdownRead
                        introduction={mydata?.user.introduction}
                      ></MarkdownRead>
                    </Grid>
                  )}
                </Grid>
                <Grid margin="0 0 0 25%" width="49%">
                  {filter === "소개" && introduction === false && (
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
                          <NoticeText>
                            소개 작성은 PC환경에서 작성 가능합니다.
                          </NoticeText>
                        </>
                      )}
                    </>
                  )}
                </Grid>
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
  max-width: 1000px;
  display: flex;
  margin-left: 30%;
  width: 39vw;
  z-index: 999;

  @media screen and (max-width: 1600px) {
    margin-left: 34%;
  }
  @media screen and (max-width: 1200px) {
    width: 90vw;
    justify-content: center;
    margin: auto;
  }
  @media screen and (max-width: 750px) {
    width: 90vw;
    justify-content: center;
    margin: auto;
  } ;
`;
const NoIntroduction = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  position: relative;
  margin-left: 20%;
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
  margin: 0px 0 0 40%;
  width: 150px;
  @media screen and (max-width: 1600px) {
    margin: 0px 0 0 38%;
  }
  @media screen and (max-width: 1300px) {
    margin: 0px 0 0 38%;
  }
  @media screen and (max-width: 490px) {
    display: none;
  } ;
`;

const NoticeText = styled.div`
  color: #737373;
  font-size: 12px;

  @media screen and (min-width: 490px) {
    color: #737373;
    font-size: 12px;
  }
  @media screen and (min-width: 491px) {
    display: none;
  } ;
`;

export default MyPageInfo;
