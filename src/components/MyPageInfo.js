/* eslint-disable */
// import를 한다.
import React from "react";

import Img from "../images/임시로고.jpg";
import { Grid, Image, Text } from "../elements/Index";
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

// MyPageInfo의 함수형 컴포넌트를 만든다.
const MyPageInfo = props => {
  const dispatch = useDispatch();
  // const userId = useSelector((state) => state.user.userId);
  const userId = props.match.params.id;
  // console.log(props);
  console.log(userId);
  const [filter, setFilter] = React.useState("소개");
  const [mydata, setMydata] = React.useState();

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

  console.log(recruitmentProject);
  console.log(inProgressProject);
  console.log(bookMarkProject);
  console.log(endProject);

  return (
    <React.Fragment>
      <Grid
        margin="-100px 0px"
        display="flex"
        height="400px"
        bgImg="url(/img/testtest.png)"
      ></Grid>
      <Grid
        margin="-260px 0 0 55px"
        width="270px"
        height="500px"
        backgroundColor="black"
        borderRadius="20px"
      ></Grid>
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
      {filter === "완료" && <MypagePostList {...endProject}></MypagePostList>}
      <button
        onClick={() => {
          history.push({
            pathname: "/addmarkdown",
            state: { userId: userId },
          });
        }}
      >
        작성하기
      </button>

      {filter === "소개" && introduction === true && (
        <MarkdownRead {...userId}></MarkdownRead>
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
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default MyPageInfo;
