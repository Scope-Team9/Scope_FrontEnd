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
  console.log(cards);
  const is_reBook_clicked = useSelector((state) => state.rebook.reBook);
  const is_mainPage = useSelector((state) => state.post.mainpage);
  const pageCheck = useSelector((state) => state.post.pageCheck);
  // const infinity = useSelector((state) => state.infinity.paging);
  const whatPage = useSelector((state) => state.post.whatPage);
  const [ref, inView] = useInView();
  const [paging, setPaging] = React.useState(9);
  const [nowFilter, setNowFilter] = React.useState("최신");
  const post_list = useSelector((state) => state.post.posts);
  console.log("어떻게오느냐 을랴랴랴랴랴랴ㅑ랴랴", post_list);
  console.log(pageCheck);

  // console.log(useSelector((state) => state.infinity.paging));
  // let page = 0;

  // const [page, setPage] = React.useState(0);

  // console.log(paging);
  // Todo 수정페이지에도 페이지 리덕스 넘겨줘야함

  React.useEffect(() => {
    console.log("?? 여기서 되는거임?");
    dispatch(postActions.isMainPage(true));
    dispatch(postActions.whatPage("mainPage"));
    console.log("무얏호우", whatPage);

    dispatch(postActions.getPostAPI());

    console.log("?? 여기서 되는거임?");
  }, [is_stack_clicked, is_sort_clicked, is_reBook_clicked, pageCheck]);

  React.useEffect(() => {
    if (inView === true) {
      setPaging(paging + 9);
      console.log("내가 페이지", paging);
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
    }
  }, [inView]);

  //sort
  const onclickSort = (data) => {
    dispatch(postActions.isMainPage(true));
    dispatch(sortAction.getSort(data));
    dispatch(bookRecommendAction.getRb(""));
    setPaging(9);
  };
  //bookmark,recommend
  const onclickRb = (data) => {
    dispatch(postActions.isMainPage(true));
    dispatch(bookRecommendAction.getRb(data));
    dispatch(sortAction.getSort(""));
    // if (paging > 0) {
    //   setPaging(paging - 1);
    // }
    setPaging(9);
  };

  const checkNowFilter = (data) => {
    setNowFilter(data);
  };

  return (
    <>
      <Grid height="100%" bg="#ffff" padding="0px 0px 10px 0"></Grid>
      {/* <ResponsiveSidebar>
        <SideBar />
      </ResponsiveSidebar> */}
      <Grid margin="-10px 0 0 0 ">
        <Inside>
          <TopBanner />
          <MainSlide />
          <Stacks>
            <Stack />
          </Stacks>
          <FilterBox>
            <Filtering
              onClick={() => {
                onclickSort("createdAt");
                checkNowFilter("createdAt");
              }}
            >
              최신
            </Filtering>
            <Filtering
              onClick={() => {
                onclickSort("deadline");
                checkNowFilter("deadline");
              }}
            >
              마감순
            </Filtering>
            <Filtering
              onClick={() => {
                onclickRb("bookmark");
                checkNowFilter("bookmark");
              }}
            >
              북마크
            </Filtering>
            <Filtering
              onClick={() => {
                onclickRb("recommend");
                checkNowFilter("recommend");
              }}
            >
              추천
            </Filtering>
          </FilterBox>

          <InsideCard>
            {/* {post_list.length === 0 && pageCheck === false && (
              <>
                <div style={{ height: "500px" }}></div>
              </> */}
            {/* )} */}
            <PostList></PostList>
          </InsideCard>
          {nowFilter !== "bookmark" && (
            <div
              ref={ref}
              style={{
                height: "500px",
              }}
            ></div>
          )}

          <Btn
            onClick={() => {
              history.push("/postadd");
            }}
          >
            {" "}
            <i
              style={{
                fontSize: "30px",
                margin: "12px auto",
                color: "white",
              }}
              className="fas fa-plus"
            ></i>
          </Btn>
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
  @media screen and (max-width: 750px) {
    /* margin-left: -100px; */
  } ;
`;

const InsideCard = styled.div`
  @media screen and (max-width: 750px) {
    margin-left: 18px;
  } ;
`;

const Stacks = styled.div`
  display: flex;
  font-size: 50px;
  margin-top: 20px;
`;

const FilterBox = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 20px;
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
    text-decoration: underline;
    color: lightskyblue;
  }
`;

const Btn = styled.button`
  position: fixed;
  bottom: 70px;
  border: 1px solid black;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  right: 50px;
  margin: auto;
  background: blue;
  cursor: pointer;
`;

export default MainPage;
