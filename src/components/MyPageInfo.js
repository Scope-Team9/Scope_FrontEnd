/* eslint-disable */
// import를 한다.
import React from "react";

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

// MyPageInfo의 함수형 컴포넌트를 만든다.
const MyPageInfo = (props) => {
  const dispatch = useDispatch();
  // const userId = useSelector((state) => state.user.userId);
  const userId = props.match.params.id;
  // console.log(props);
  // console.log(userId);
  const [filter, setFilter] = React.useState("소개");
  const [mydata, setMydata] = React.useState();
  const [editMyProfile, setEditMyProfile] = React.useState(false);
  const [techStack, setTeckstack] = React.useState([]);

  const [nickName, setNickName] = React.useState();
  const [email, setEmail] = React.useState();
  // console.log(nickName);
  const myType = mydata?.user.userPropensityType;
  // console.log(myType);

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
  }, [filter]);
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

  const setEditProfile = () => {
    if (techStack.length > 4) {
      window.alert("기술은 4개 까지 선택 가능합니다.");
      return;
    }
    setEditMyProfile(false);
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
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
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

  const EmailConfirm = () => {};

  return (
    <React.Fragment>
      {mydata && myType && (
        <>
          <Banner>
            {myType === "LVG" && (
              <BannerTiger>
                <BannerImg src="/img/호랑이.png"></BannerImg>

                <Grid margin="-500px 0 0 500px">
                  <WhiteP>LVG / 호랑이</WhiteP>
                </Grid>
                <Grid margin="-500px 0 0 90%" zIndex="2">
                  <ConfirmEmail
                    onClick={() => {
                      EmailConfirm();
                    }}
                  >
                    이메일 인증하기
                  </ConfirmEmail>
                </Grid>
              </BannerTiger>
            )}
            {myType === "LVP" && (
              <BannerWolf>
                <BannerImg src="/img/늑대.png"></BannerImg>

                <Grid margin="-500px 0 0 500px">
                  <WhiteP>LVP / 늑대</WhiteP>
                </Grid>
                <Grid margin="-500px 0 0 90%" zIndex="2">
                  <ConfirmEmail
                    onClick={() => {
                      EmailConfirm();
                    }}
                  >
                    이메일 인증하기
                  </ConfirmEmail>
                </Grid>
              </BannerWolf>
            )}
            {myType === "LHG" && (
              <BannerFox>
                <BannerImg src="/img/여우.png"></BannerImg>

                <Grid margin="-500px 0 0 500px">
                  <WhiteP>LHG / 여우</WhiteP>
                </Grid>
                <Grid margin="-500px 0 0 90%" zIndex="2">
                  <ConfirmEmail
                    onClick={() => {
                      EmailConfirm();
                    }}
                  >
                    이메일 인증하기
                  </ConfirmEmail>
                </Grid>
              </BannerFox>
            )}
            {myType === "LHP" && (
              <BannerPanda>
                <BannerImg src="/img/판다.png"></BannerImg>
                <Grid margin="-500px 0 0 500px">
                  <WhiteP>LHP / 팬더</WhiteP>
                </Grid>
                <Grid margin="-500px 0 0 90%" zIndex="2">
                  <ConfirmEmail
                    onClick={() => {
                      EmailConfirm();
                    }}
                  >
                    이메일 인증하기
                  </ConfirmEmail>
                </Grid>
              </BannerPanda>
            )}
            {myType === "FVG" && (
              <BannerRabbit>
                <BannerImg src="/img/토끼.png"></BannerImg>

                <Grid margin="-500px 0 0 500px">
                  <WhiteP>FVG / 토끼</WhiteP>
                </Grid>
                <Grid margin="-500px 0 0 90%" zIndex="2">
                  <ConfirmEmail
                    onClick={() => {
                      EmailConfirm();
                    }}
                  >
                    이메일 인증하기
                  </ConfirmEmail>
                </Grid>
              </BannerRabbit>
            )}
            {myType === "FVP" && (
              <BannerDog>
                <BannerImg src="/img/개.png"></BannerImg>

                <Grid margin="-500px 0 0 500px">
                  <WhiteP>FVP / 강아지</WhiteP>
                </Grid>
                <Grid margin="-500px 0 0 90%" zIndex="2">
                  <ConfirmEmail
                    onClick={() => {
                      EmailConfirm();
                    }}
                  >
                    이메일 인증하기
                  </ConfirmEmail>
                </Grid>
              </BannerDog>
            )}
            {myType === "FHG" && (
              <BannerCat>
                <BannerImg src="/img/고양이.png"></BannerImg>

                <Grid margin="-500px 0 0 500px">
                  <WhiteP>LHP / 팬더</WhiteP>
                </Grid>
                <Grid margin="-500px 0 0 90%" zIndex="2">
                  <ConfirmEmail
                    onClick={() => {
                      EmailConfirm();
                    }}
                  >
                    이메일 인증하기
                  </ConfirmEmail>
                </Grid>
              </BannerCat>
            )}
            {myType === "FHP" && (
              <BannerSeal>
                <BannerImg src="/img/물개.png"></BannerImg>

                <Grid margin="-500px 0 0 500px">
                  <WhiteP>LHP / 팬더</WhiteP>
                </Grid>
                <Grid margin="-500px 0 0 90%" zIndex="2">
                  <ConfirmEmail
                    onClick={() => {
                      EmailConfirm();
                    }}
                  >
                    이메일 인증하기
                  </ConfirmEmail>
                </Grid>
              </BannerSeal>
            )}
          </Banner>

          <Cards>
            <div style={{}}>
              {myType === "LVG" && <CardImg src="/img/호랑이.png"></CardImg>}
              {myType === "LVP" && <CardImg src="/img/늑대.png"></CardImg>}
              {myType === "LHG" && <CardImg src="/img/여우.png"></CardImg>}
              {myType === "LHP" && <CardImg src="/img/판다.png"></CardImg>}
              {myType === "FVG" && <CardImg src="/img/토끼.png"></CardImg>}
              {myType === "FVP" && <CardImg src="/img/허스키.png"></CardImg>}
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
          <Grid margin="-1000px 0 0 660px" display="flex">
            <MyResultDiv>
              <MyResultText>리더</MyResultText>
              <MyResultText>수평</MyResultText>
              <MyResultText>과정</MyResultText>
              <GotoTest>성향 테스트하기⇀</GotoTest>
            </MyResultDiv>
          </Grid>

          <Grid
            display="flex"
            margin="auto"
            justifyContent="center"
            margin="0px 0 0 150px"
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
              style={{ float: "right", margin: "0 10% 0 0" }}
              onClick={() => {
                history.push({
                  pathname: "/addmarkdown",
                  state: { userId: userId },
                });
              }}
            >
              작성하기
            </button>
          )}
          <Grid margin="0 0 0 200px">
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
  margin-left: 12%;
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
  background-color: rgba(255, 255, 255, 0);
  border-radius: 20px;
  overflow: hidden;
  z-index: 1;
  position: relative;
  @media screen and (max-width: 1600px) {
    width: 450px;
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
const Banner = styled.div`
  width: 100%;
  margin: -100px auto;
  display: flex;
  height: 500px;
  overflow: hidden;
`;
const BannerImg = styled.img`
  object-fit: cover;
  width: 1200px;
  height: 180%;
  margin: auto auto auto 20%;
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
  width: 140px;
  padding: 5px 15px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  border-radius: 10px;
  z-index: 99999;
  cursor: pointer;
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
`;
export default MyPageInfo;
