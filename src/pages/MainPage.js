/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { Grid, Input, Button, Text } from "../elements/Index";
import Stack from "../components/Stack";
import PostList from "../components/PostList";
import { postActions } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";
import MainSlide from "../components/carousel/MainSlide";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router";
import Sort from "../components/filter/Sort";
import { apis } from "../lib/axios";
import Spinner from "../shared/Spinner";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FeedbackBox from "../components/Feedback";

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const stack = useSelector(state => state.stack.stack);
  const sortC = useSelector(state => state.sort.sort);
  const isToken = document.cookie;

  const reBookC = useSelector(state => state.rebook.reBook);
  const pageCheck = useSelector(state => state.post.pageCheck);
  const infinity = useSelector(state => state.infinity.paging);
  const Render = useSelector(state => state.post.render);

  const [paging, setPaging] = React.useState(infinity.next);
  const [pPaging, setPPaging] = React.useState(12);
  const [nowFilter, setNowFilter] = React.useState("최신");
  const [post, setPost] = React.useState();
  const [feedback, setFeedback] = React.useState(false);

  const [ref, inView] = useInView();
  //프론트쪽에서 필터
  const [stacks, setStacks] = React.useState([]);

  const postList = useSelector(state => state.post.posts);
  const isLoginUser = useSelector(state => state.user.userId);
  const isLogin = useSelector(state => state.user.isLogin);

  //Intersection ObserverAPI
  React.useEffect(() => {
    if (inView === true) {
      setPPaging(pPaging + 12);

      if (postList.length === 0 && pageCheck === false) {
        dispatch(postActions.pageCheck(true));
      }
    } // 옵저버를 좀 더 위로
  }, [inView]);

  //각종 필터
  React.useLayoutEffect(() => {
    setPost();
    dispatch(postActions.whatPage("mainPage"));

    const fetchData = async () => {
      try {
        const result = await apis.getPost(stack, sortC, reBookC);
        setPost(result.data.data);
      } catch (err) {}
    };
    fetchData();
  }, [sortC, reBookC, Render, isToken, Render, isLogin]);

  const goPage = () => {
    window.open(
      // "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfl6t0O_P5mXR6wo1cqIZ7TWkYduTkZiNlx0r5HynoArgS9Tg/formResponse",
      // "_blank"
      "https://scopewith.notion.site/MEMBER-4113e65749054b14a623c098c569d819",
      "_blank"
    );
  };

  // 위로가기 버튼
  const ScrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  };

  const ToggleFeedback = () => {
    setFeedback(!feedback);
  };

  return (
    <OutWrap>
      <Grid margin="0px 0 0 0 ">
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
                  Render={Render}
                  isLogin={isLogin}
                ></PostList>
              </InsideCard>

              <Grid margin="-550px 0 0 0">
                <div ref={ref}></div>
              </Grid>
            </>
          )}
          {!post && (
            <SpinnerLocation>
              <Spinner />
            </SpinnerLocation>
          )}
          <Scrollup
            onClick={() => {
              ScrollTop();
            }}
          >
            <ArrowUpwardIcon
              sx={{ fontSize: "60px", color: "#c4c4c4" }}
            ></ArrowUpwardIcon>
          </Scrollup>
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

          {feedback ? (
            <FeedbackBox ToggleFeedback={ToggleFeedback}></FeedbackBox>
          ) : (
            <BtnFeedback
              src="/img/FeedbackBox.png"
              onClick={ToggleFeedback}
            ></BtnFeedback>
          )}
        </Inside>
        <Grid height="800px"></Grid>
      </Grid>
    </OutWrap>
  );
};
const OutWrap = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
`;

const Inside = styled.div`
  @media screen and (max-width: 750px) {
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
  &:hover {
    background: #172d40;
    transform: translate();
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 750px) {
    position: fixed;
    display: none;
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

  width: 80px;
  height: 80px;
  text-align: center;
  left: 50px;
  margin: auto;

  cursor: pointer;
  z-index: 999;
  transition: all ease 0.3s;
  &:hover {
    transform: rotate(10deg);
  }

  @media screen and (max-width: 767px) {
    position: fixed;
    width: 50px;
    height: 50px;
    text-align: center;
    left: 5px;
    bottom: 120px;
    margin: auto;
    cursor: pointer;
    z-index: 999;
  } ;
`;

const SpinnerLocation = styled.div`
  margin: -250px 0 0 0;
  @media screen and (max-width: 767px) {
    margin: 0px 0 0 0;
  } ;
`;

const Scrollup = styled.div`
  background-color: transparent;
  border-radius: 50px;
  position: fixed;
  bottom: 150px;
  width: 60px;
  height: 60px;
  text-align: center;
  right: 50px;
  margin: auto;
  cursor: pointer;
  z-index: 999;

  @media screen and (max-width: 767px) {
    display: none;
  } ;
`;

export default MainPage;
