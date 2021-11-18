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
import Sort from "../components/filter/Sort";
import { apis } from "../lib/axios";

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const stack = useSelector((state) => state.stack.stack);
  const sort = useSelector((state) => state.sort.sort);
  const is_loading = useSelector((state) => state.post.is_loading);
  const cards = useSelector((state) => state.post.posts);
  // console.log(cards);
  const reBook = useSelector((state) => state.rebook.reBook);
  const pageCheck = useSelector((state) => state.post.pageCheck);
  const infinity = useSelector((state) => state.infinity.paging);
  const Render = useSelector((state) => state.post.render);
  const [ref, inView] = useInView();
  const [paging, setPaging] = React.useState(infinity.next);
  const [pPaging, setPPaging] = React.useState(12);
  const [nowFilter, setNowFilter] = React.useState("최신");
  const [post, setPost] = React.useState();

  const post_list = useSelector((state) => state.post.posts);
  const isLoginUser = useSelector((state) => state.user.userId);

  React.useEffect(() => {
    dispatch(postActions.whatPage("mainPage"));
    // console.log("어떻게오느냐 을랴랴랴랴랴랴ㅑ랴랴", post_list);
    dispatch(postActions.getPostAPI());
    // const GetPost = async () => {
    //   console.log("스택", stack);
    //   try {
    //     const result = await apis.getPost(stack, sort, reBook);
    //     setPost(result);
    //     console.log("자 들어옵니다", result);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // GetPost();
  }, [stack, sort, reBook, pageCheck, Render]);

  // 요청에 대한 속도가 다를때. 다른것이 띄워질 수 있는 버그성.

  React.useEffect(() => {
    if (inView === true) {
      // setPaging(paging + 12);
      setPPaging(pPaging + 12);
      // console.log("내가 페이지", infinity);
      // dispatch(pageAction.getPage(paging));
      // if (post_list.length === 0 && pageCheck === false) {
      //   dispatch(postActions.pageCheck(true));
      // }
    } // 옵저버를 좀 더 위로
    // console.log(pPaging);
  }, [inView]);

  return (
    <>
      {post_list && (
        <>
          <Grid
            maxWidth="1920px"
            height="100%"
            bg="#ffff"
            padding="0px 0px 10px 0"
          ></Grid>
          <Grid margin="-10px 0 0 0 ">
            <Inside>
              <MainSlide />
              <Stacks>
                <Stack do={"StacksComponent"} />
              </Stacks>
              <Sort setPaging={setPaging} page="mainPage"></Sort>
              <InsideCard>
                <PostList post={post} paging={pPaging}></PostList>
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
      )}
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
