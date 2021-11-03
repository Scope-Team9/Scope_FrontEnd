/* eslint-disable */
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Grid } from "../elements/Index";
import Carousel from "../components/Carousel";
import SideBar from "../components/SideBar";
import Infinity from "../shared/Infinity";
import Stack from "../components/Stack";
import PostList from "../components/PostList";
import { postActions } from "../redux/modules/post";
import { sortAction } from "../redux/modules/sort";
import { bookRecommendAction } from "../redux/modules/bookRecommend";
import { useSelector, useDispatch } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();
  const is_stack_clicked = useSelector((state) => state.stack.stack);
  const is_sort_clicked = useSelector((state) => state.sort.sort);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);

  const [sort, setSort] = React.useState("createdAt");

  console.log(paging);

  React.useEffect(() => {
    console.log("?? 여기서 되는거임?");
    dispatch(postActions.getPostAPI());
  }, [is_stack_clicked, is_sort_clicked]);
  //무한스크롤 다음
  const callNext = () => {
    dispatch(postActions.getPostAPI());
    console.log("??");
  };
  //sort
  const onclickSort = (data) => {
    dispatch(sortAction.getSort(data));
  };
  //bookmark,recommend
  const onclickRb = (data) => {
    dispatch(bookRecommendAction.getRb(data));
  };

  return (
    <>
      <Grid height="100%" bg="#ffff" padding="0px 0px 10px 0"></Grid>
      {/* <ResponsiveSidebar>
        <SideBar />
      </ResponsiveSidebar> */}
      <Grid margin="-10px 0 0 0 ">
        <Inside>
          <Carousel />
          <Stacks>
            <Stack />
          </Stacks>
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
          <Infinity
            paging={paging}
            is_loading={is_loading}
            callNext={callNext}
            is_next={paging.next < 5 ? true : false}
          >
            <InsideCard>
              <PostList></PostList>
            </InsideCard>
          </Infinity>
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

export default MainPage;
