/* eslint-disable */
import React from "react";
import "./App.css";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userCreators } from "../redux/modules/user";

import MainPage from "../pages/MainPage";
import KakaoRedirect from "./kakaoRedirect";
import GitHubRedirect from "./GitHubRedirect";

import MyPageInfo from "../components/MyPageInfo";
import PostWrite from "../pages/PostWrite";
import PostEdit from "../pages/PostEdit";
import PostDetail from "../pages/PostDetail";
import Markdown from "../components/Markdown";
import MarkdownRead from "../components/MarkdownRead";
import Header from "../components/Header";
import Message from "../components/headerFunction/Message";
import Footer from "../components/Footer";

//테스트용입니다.
import PropensityTest from "../components/propensityTest/PropensityTest";

function App() {
  const isLogin = useSelector((state) => state.user.isLogin);
  const userInfo = useSelector((state) => state.user);
  const isCookie = document.cookie;
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    if (isCookie) {
      dispatch(userCreators.myUserAPI());
    }
  }, [isLogin, isCookie]);

  return (
    <React.Fragment>
      <div className="App">
        <Header />

        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={MainPage}></Route>
            <Route path="/message" exact component={Message}></Route>
            <Route path="/mypage/:id" exact component={MyPageInfo}></Route>
            <Route path="/postadd" exact component={PostWrite}></Route>
            <Route path="/postedit/:id" exact component={PostEdit}></Route>
            <Route path="/addmarkdown" exact component={Markdown}></Route>
            <Route path="/postdetail/:id" exact component={PostDetail}></Route>

            <Route
              path="/user/kakao/callback"
              exact
              component={KakaoRedirect}
            ></Route>
            <Route
              path="/user/github/callback"
              exact
              component={GitHubRedirect}
            ></Route>
          </Switch>
        </ConnectedRouter>
        <Footer userInfo={userInfo} />
      </div>
    </React.Fragment>
  );
}

export default App;
