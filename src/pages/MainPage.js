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
  const sortC = useSelector((state) => state.sort.sort);

  // const cards = useSelector((state) => state.post.posts);
  // console.log(cards);
  const reBookC = useSelector((state) => state.rebook.reBook);
  const pageCheck = useSelector((state) => state.post.pageCheck);
  const infinity = useSelector((state) => state.infinity.paging);
  const Render = useSelector((state) => state.post.render);
  const [ref, inView] = useInView();
  const [paging, setPaging] = React.useState(infinity.next);
  const [pPaging, setPPaging] = React.useState(12);
  const [nowFilter, setNowFilter] = React.useState("최신");
  const [post, setPost] = React.useState();

  //프론트쪽에서 필터
  const [stacks, setStacks] = React.useState([]);
  const [sorts, setSrots] = React.useState();
  const [reBooks, setReBookss] = React.useState();

  // const pSorts = useSelector((state) => state.post.sorts);
  // const pReBook = useSelector((state) => state.post.stacks);
  // console.log("나만봐", pStack);

  const postList = useSelector((state) => state.post.posts);
  const isLoginUser = useSelector((state) => state.user.userId);
  const isLogin = useSelector((state) => state.user.isLogin);

  React.useEffect(() => {
    setPost();
    dispatch(postActions.whatPage("mainPage"));
    // dispatch(postActions.getPostAPI());
    // console.log(cards);
    console.log("이러다 다 죽어");
    const fetchData = async () => {
      try {
        const result = await apis.getPost(stack, sortC, reBookC);
        setPost(result.data.data);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [sortC, reBookC]);

  // React.useLayoutEffect(() => {
  //   dispatch(postActions.whatPage("mainPage"));
  //   // dispatch(postActions.getPostAPI());
  //   // console.log(cards);

  //   // console.log(post);
  // }, [sortC, stack, reBookC, Render, isLogin]);
  // stack, sortC, reBookC, Render, isLogin
  // 요청에 대한 속도가 다를때. 다른것이 띄워질 수 있는 버그성.

  React.useEffect(() => {
    if (inView === true) {
      // setPaging(paging + 12);
      setPPaging(pPaging + 12);
      // console.log("내가 페이지", infinity);
      // dispatch(pageAction.getPage(paging));
      if (postList.length === 0 && pageCheck === false) {
        dispatch(postActions.pageCheck(true));
      }
    } // 옵저버를 좀 더 위로
    // console.log(pPaging);
  }, [inView]);

  const goPage = () => {
    window.open(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfl6t0O_P5mXR6wo1cqIZ7TWkYduTkZiNlx0r5HynoArgS9Tg/formResponse",
      "_blank"
    );
  };

  return (
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
            <Stack
              do={"StacksComponent"}
              setStacks={setStacks}
              stacks={stacks}
            />
          </Stacks>
          <Sort setPaging={setPaging} page="mainPage"></Sort>
          {post && (
            <>
              <InsideCard>
                <PostList
                  post={post}
                  paging={pPaging}
                  stacks={stacks}
                ></PostList>
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
            </>
          )}
          {isLoginUser && (
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
          <BtnFeedback
            src="/img/FeedbackBox.png"
            onClick={() => {
              goPage();
            }}
          ></BtnFeedback>
        </Inside>
      </Grid>
    </>
  );
};

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

const BtnFeedback = styled.img`
  position: fixed;
  bottom: 70px;
  /* border: 1px solid #c4c4c4; */
  /* border-radius: 50%; */
  width: 60px;
  height: 60px;
  text-align: center;
  left: 50px;
  margin: auto;
  /* background: #c4c4c4; */
  cursor: pointer;
  z-index: 999;
  transition: all ease 0.3s;
  &:hover {
    transform: rotate(45deg);
  }

  @media screen and (max-width: 750px) {
    position: fixed;

    width: 40px;
    height: 40px;
    text-align: center;
    left: 5px;
    bottom: 5px;
    margin: auto;
    cursor: pointer;
    z-index: 999;
  } ;
`;

export default MainPage;
