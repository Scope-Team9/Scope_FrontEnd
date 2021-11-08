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
import { height } from "@mui/system";
import { Input } from "reactstrap";

// MyPageInfo의 함수형 컴포넌트를 만든다.
const MyPageInfo = (props) => {
  const dispatch = useDispatch();
  // const userId = useSelector((state) => state.user.userId);
  const userId = props.match.params.id;
  // console.log(props);
  console.log(userId);
  const [filter, setFilter] = React.useState("소개");
  const [mydata, setMydata] = React.useState();
  const [editMyProfile, setEditMyProfile] = React.useState(false);
  console.log(mydata);
  React.useEffect(() => {
    // dispatch(myPageActions.getMypageAPI(userId));
    dispatch(postActions.isMainPage(false));
    dispatch(postActions.whatPage("myPage"));

    const fetchData = async () => {
      try {
        const result = await apis.getMypage(userId);
        console.log(result);
        setMydata(result.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [filter]);
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
    setEditMyProfile(false);
  };
  const editProfileCancle = () => {
    setEditMyProfile(false);
  };
  const nickEmailCheck = () => {};

  return (
    <React.Fragment>
      {mydata && (
        <>
          <Grid
            width="100%"
            margin="-100px auto"
            display="flex"
            height="400px"
            bgImg="url(/img/testtest.png)"
          ></Grid>
          <Cards>
            <img
              src="/img/fire.png"
              style={{ width: "300px", height: "400px", borderRadius: "20px" }}
            ></img>
            {editMyProfile === false && (
              <>
                {/* 닉네임 */}
                <MyInfoText1>
                  <div style={{ width: "100px", marginLeft: "30px" }}>
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
                      width: "100px",
                      marginLeft: "30px",
                      height: "150px",
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
                  <div style={{ width: "100px", marginLeft: "30px" }}>
                    <p>TechStack </p>
                  </div>
                  <div style={{ width: "150px" }}>
                    <p>stacks, stacks, stacks, stacks, stacks</p>
                  </div>
                </MyInfoText1>
                <Line></Line>
                {/* 진행 프로젝트 */}
                <MyInfoText2>
                  <div style={{ width: "150px", marginLeft: "30px" }}>
                    <p>모집 프로젝트 </p>
                  </div>
                  <div style={{ width: "50px", marginLeft: "100px" }}>
                    <p>{mydata.recruitment.length}</p>
                  </div>
                </MyInfoText2>
                {/* 참여 프로젝트 */}
                <MyInfoText2>
                  <div style={{ width: "150px", marginLeft: "30px" }}>
                    <p>진행 프로젝트 </p>
                  </div>
                  <div style={{ width: "50px", marginLeft: "100px" }}>
                    <p>{mydata.inProgress.length}</p>
                  </div>
                </MyInfoText2>
                {/* 마감 프로젝트 */}
                <MyInfoText2>
                  <div style={{ width: "150px", marginLeft: "30px" }}>
                    <p>완료 프로젝트 </p>
                  </div>
                  <div style={{ width: "50px", marginLeft: "100px" }}>
                    <p>{mydata.end.length}</p>
                  </div>
                </MyInfoText2>
                <Button
                  margin="15px auto 15px 28%"
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
                    ></input>
                  </div>
                </MyInfoText1>

                {/* 이메일 */}
                <MyInfoText1>
                  <div
                    style={{
                      width: "90px",
                      marginLeft: "30px",
                      height: "150px",
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
                    ></input>
                  </div>
                </MyInfoText1>

                <Line></Line>
                {/* 진행 프로젝트 */}
                <MyInfoText2>
                  <div style={{ width: "150px", marginLeft: "30px" }}>
                    <p>진행 프로젝트 </p>
                  </div>
                  <div style={{ width: "50px", marginLeft: "100px" }}>
                    <p>5</p>
                  </div>
                </MyInfoText2>
                {/* 참여 프로젝트 */}
                <MyInfoText2>
                  <div style={{ width: "150px", marginLeft: "30px" }}>
                    <p>참여 프로젝트 </p>
                  </div>
                  <div style={{ width: "50px", marginLeft: "100px" }}>
                    <p>5</p>
                  </div>
                </MyInfoText2>
                {/* 마감 프로젝트 */}
                <MyInfoText2>
                  <div style={{ width: "150px", marginLeft: "30px" }}>
                    <p>마감 프로젝트 </p>
                  </div>
                  <div style={{ width: "50px", marginLeft: "100px" }}>
                    <p>5</p>
                  </div>
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
          <Grid display="flex" margin="auto" justifyContent="center">
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
              style={{ float: "right", margin: "0 20% 0 0" }}
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

          {filter === "소개" && introduction === true && (
            <MarkdownRead {...userId}></MarkdownRead>
          )}
        </>
      )}
    </React.Fragment>
  );
};

const Filter = styled.p`
  margin: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    text-decoration: underline;
    color: lightskyblue;
  }
  @media screen and (max-width: 1400px) {
    margin-top: 650px;
  }
  @media screen and (max-width: 750px) {
    margin-top: 650px;
  } ;
`;

const Cards = styled.div`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  margin: -260px 0 -600px 55px;
  width: 300px;
  height: 900px;
  background-color: #e6e6e6;
  border-radius: 20px;
  @media screen and (max-width: 1400px) {
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
// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default MyPageInfo;
