/* eslint-disable */
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import TopBanner from "../components/carousel/TopBanner";
import { Grid, Button } from "../elements/Index";
import Stack from "../components/Stack";
import PostList from "../components/PostList";
import { postActions } from "../redux/modules/post";
import { sortAction } from "../redux/modules/sort";
import { bookRecommendAction } from "../redux/modules/bookRecommend";
import { pageAction } from "../redux/modules/infinity";
import { useSelector, useDispatch } from "react-redux";
import MainSlide from "../components/carousel/MainSlide";
import { useInView } from "react-intersection-observer";
import { Tune } from "@material-ui/icons";
import { useHistory } from "react-router";

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const is_stack_clicked = useSelector((state) => state.stack.stack);
  const is_sort_clicked = useSelector((state) => state.sort.sort);

  const is_loading = useSelector((state) => state.post.is_loading);
  const cards = useSelector((state) => state.post.posts);
  // console.log(cards);
  const is_reBook_clicked = useSelector((state) => state.rebook.reBook);
  const is_mainPage = useSelector((state) => state.post.mainpage);
  const pageCheck = useSelector((state) => state.post.pageCheck);
  const infinity = useSelector((state) => state.infinity.paging);
  const whatPage = useSelector((state) => state.post.whatPage);
  const Render = useSelector((state) => state.post.render);
  const [ref, inView] = useInView();
  const [paging, setPaging] = React.useState(infinity.next);
  const [nowFilter, setNowFilter] = React.useState("최신");
  //click
  const [currentClick, setCurrentClick] = React.useState(null);
  const [prevClick, setPrevClick] = React.useState(null);

  const post_list = useSelector((state) => state.post.posts);
  const isLoginUser = useSelector((state) => state.user.userID);
  console.log(isLoginUser);
  // console.log(pageCheck);

  // console.log(useSelector((state) => state.infinity.paging));
  // let page = 0;

  // const [page, setPage] = React.useState(0);

  // console.log(paging);
  // Todo 수정페이지에도 페이지 리덕스 넘겨줘야함

  React.useEffect(() => {
    console.log("?? 여기서 되는거임?");
    // dispatch(postActions.isMainPage(true));
    dispatch(postActions.whatPage("mainPage"));
    // console.log("무얏호우", whatPage);
    console.log("어떻게오느냐 을랴랴랴랴랴랴ㅑ랴랴", post_list);
    dispatch(postActions.getPostAPI());
    console.log("?? 여기서 되는거임?");
  }, [is_stack_clicked, is_sort_clicked, is_reBook_clicked, pageCheck, Render]);

  // 요청에 대한 속도가 다를때. 다른것이 띄워질 수 있는 버그성.

  React.useEffect(() => {
    if (inView === true) {
      setPaging(paging + 12);

      console.log("내가 페이지", infinity);
      dispatch(pageAction.getPage(paging));
      // dispatch(postActions.getPostAPI());
      // 다른페이지에서 새로고침하면 현재 페이지가 그 페이지로 되고 메인으로 나오면 포스트 호출을 끊고 page.next와 page.pre를 main으로 바꾸지만
      //스크롤로 다시 getpost를 실행할 수 없어서 안불러와짐.
      // 그래서 pageCheck 라는 친구를 둬서 그 친구가 바뀔 때 마다 getPost하는 useEffect가 리랜더링 되도록 하였다.
      // pageCheck는 기본값이 false . 즉 메인페이지가 아닌 다른페이지 경로로 먼저 들어왔을 경우 메인페이지로 이동했을때
      // true로 바꾸어 위에있는 useEffect를 렌더링시켜 getPost를 호출하였다. 하지만 이럼에도 문제가 발생했으니..
      // 화면이 그려질때 observer div가 보여져서 처음 메인화면에서 새로고침 했을 때에 getPost가 두번 호출당하는 사태가 발생
      // 받아올때 push를 없앴다.
      if (post_list.length === 0 && pageCheck === false) {
        dispatch(postActions.pageCheck(true));
      }
    } // 옵저버를 좀 더 위로
  }, [inView]);

  React.useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        current.style.color = "#333";
        current.style.borderBottom = "2px solid";
        current.style.borderBottomColor = "#707070";
      }
      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.color = "#333";
        prev.style.borderBottom = "none";
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );

  //sort
  const onclickSort = (data) => {
    dispatch(postActions.isMainPage(true));
    dispatch(sortAction.getSort(data));
    dispatch(bookRecommendAction.getRb(""));
    setPaging(12);
  };
  //bookmark,recommend
  const onclickRb = (data) => {
    dispatch(postActions.isMainPage(true));
    dispatch(bookRecommendAction.getRb(data));
    dispatch(sortAction.getSort(""));
    // if (paging > 0) {
    //   setPaging(paging - 1);
    // }
    setPaging(12);
  };

  const checkNowFilter = (data) => {
    setNowFilter(data);
  };

  const GetClick = (e) => {
    setCurrentClick(e);
    console.log(e);
  };

  return (
    <>
      <Grid
        maxWidth="1920px"
        height="100%"
        bg="#ffff"
        padding="0px 0px 10px 0"
      ></Grid>
      {/* <ResponsiveSidebar>
        <SideBar />
      </ResponsiveSidebar> */}
      <Grid margin="-10px 0 0 0 ">
        <Inside>
          {/* <TopBanner /> */}
          <MainSlide />

          <Stacks>
            <Stack />
          </Stacks>
          <FilterBox>
            <Filtering
              id="new"
              onClick={(e) => {
                onclickSort("createdAt");
                checkNowFilter("createdAt");
                GetClick(e.target.id);
              }}
            >
              최신
            </Filtering>
            <Filtering
              id="end"
              onClick={(e) => {
                onclickSort("deadline");
                checkNowFilter("deadline");
                GetClick(e.target.id);
              }}
            >
              마감순
            </Filtering>
            <Filtering
              id="bookmark"
              onClick={(e) => {
                onclickRb("bookmark");
                checkNowFilter("bookmark");
                if (isLoginUser !== null) {
                  GetClick(e.target.id);
                }
              }}
            >
              북마크
            </Filtering>
            <Filtering
              id="recommend"
              onClick={(e) => {
                onclickRb("recommend");
                checkNowFilter("recommend");
                if (isLoginUser !== null) {
                  GetClick(e.target.id);
                } else {
                  GetClick("new");
                }
              }}
            >
              추천
            </Filtering>
          </FilterBox>

          <InsideCard>
            <PostList></PostList>
          </InsideCard>
          {nowFilter !== "bookmark" && (
            <Grid margin="-550px 0 0 0">
              <div
                ref={ref}
                style={{
                  height: "500px",
                  backgroundColor: "white",
                }}
              ></div>
            </Grid>
          )}
          {isLoginUser !== null && (
            <Btn
              onClick={() => {
                history.push("/postadd");
              }}
            >
              <i
                style={{
                  fontSize: "25px",
                  margin: "auto",
                  color: "white",
                }}
                className="fas fa-plus"
              ></i>
            </Btn>
          )}
        </Inside>
      </Grid>
    </>
  );
};

const ResponsiveSidebar = styled.div`
  @media screen and (max-width: 750px) {
    display: none;
  } ;
`;

const Inside = styled.div`
  margin: auto;
  @media screen and (max-width: 750px) {
    /* margin-left: -100px; */
  } ;
`;

const InsideCard = styled.div`
  margin: 10px auto;
  width: 75%;
  max-width: 1920px;
  @media screen and (max-width: 750px) {
    margin: auto;
  } ;
`;

const Stacks = styled.div`
  display: flex;
  font-size: 50px;
  margin-top: 20px;
`;

const FilterBox = styled.div`
  display: flex;
  font-size: 20px;
  margin: 10px auto;
  justify-content: flex-end;
  width: 75%;
  max-width: 1920px;
  @media screen and (max-width: 1850px) {
    justify-content: center;
  }
  @media screen and (max-width: 750px) {
    justify-content: center;
    font-size: 12px;
  }
`;

const Filtering = styled.p`
  margin: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    /* text-decoration: underline; */
    color: #dacceb;
  }
`;

const Btn = styled.button`
  position: fixed;
  bottom: 70px;
  border: 1px solid #c4c4c4;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  right: 50px;
  margin: auto;
  background: #c4c4c4;
  cursor: pointer;
  z-index: 999;

  @media screen and (max-width: 750px) {
    position: fixed;

    border: 1px solid #42309b;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    text-align: center;
    right: 5px;
    bottom: 5px;
    margin: auto;
    background: #42309b;
    cursor: pointer;
    z-index: 999;
  } ;
`;

const NoIntroduction = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  margin: auto;
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
  margin-left: auto;
`;
export default MainPage;
