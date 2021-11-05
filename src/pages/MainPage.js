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
  // const infinity = useSelector((state) => state.infinity.paging);
  const whatPage = useSelector((state) => state.post.whatPage);
  const [ref, inView] = useInView();
  const [paging, setPaging] = React.useState(0);

  // console.log(infinity);

  // console.log(useSelector((state) => state.infinity.paging));
  // let page = 0;

  // const [page, setPage] = React.useState(0);

  // console.log(paging);
  // Todo 수정페이지에도 페이지 리덕스 넘겨줘야함
  React.useEffect(() => {
    // console.log("?? 여기서 되는거임?");
    dispatch(postActions.isMainPage(true));
    dispatch(postActions.whatPage("mainPage"));
    dispatch(postActions.getPostAPI());
  }, [is_stack_clicked, is_sort_clicked, is_reBook_clicked]);

  React.useEffect(() => {
    if (inView === true) {
      setPaging(paging + 1);
      console.log(paging);
      dispatch(pageAction.getPage(paging));
      dispatch(postActions.getPostAPI());
    }
  }, [inView]);

  //sort
  const onclickSort = (data) => {
    dispatch(postActions.isMainPage(true));
    dispatch(sortAction.getSort(data));
    dispatch(bookRecommendAction.getRb(""));
    // if (paging > 0) {
    //   setPaging(paging - 1);
    // }
  };
  //bookmark,recommend
  const onclickRb = (data) => {
    dispatch(postActions.isMainPage(true));
    dispatch(bookRecommendAction.getRb(data));
    // if (paging > 0) {
    //   setPaging(paging - 1);
    // }
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
          <button
            onClick={() => {
              console.log(is_mainPage);
            }}
          >
            확인하기
          </button>
          <FilterBox>
            <Filtering
              onClick={() => {
                onclickSort("createdAt");
              }}
            >
              최신
            </Filtering>
            <Filtering
              onClick={() => {
                onclickSort("deadline");
              }}
            >
              마감순
            </Filtering>
            <Filtering
              onClick={() => {
                onclickRb("bookmark");
              }}
            >
              북마크
            </Filtering>
            <Filtering
              onClick={() => {
                onclickRb("recommend");
              }}
            >
              추천
            </Filtering>
          </FilterBox>

          <InsideCard>
            <PostList></PostList>
          </InsideCard>
          <div
            ref={ref}
            style={{
              height: "900px",
              backgroundColor: "white",
            }}
          ></div>
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
  background: black;
  cursor: pointer;
`;

export default MainPage;
