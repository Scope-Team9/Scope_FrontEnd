/* eslint-disable */
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userCreators } from "../redux/modules/user";

import MainPage from "../pages/MainPage";
import KakaoRedirect from "./kakaoRedirect";
import GitHubRedirect from "./GitHubRedirect";
import MyPage from "../pages/MyPage";
import MyPageInfo from "../components/MyPageInfo";
import PostWrite from "../pages/PostWrite";
import PostEdit from "../pages/PostEdit";
import PostDetail from "../pages/PostDetail";
import Markdown from "../components/Markdown";
import MarkdownRead from "../components/MarkdownRead";
import Header from "../components/Header";

//테스트용입니다.
import PropensityTest from "../components/propensityTest/PropensityTest";

function App() {
  const isLogin = useSelector(state => state.user.is_login);
  const userPropensityType = useSelector(
    state => state.user.userPropensityType
  );
  const isCookie = document.cookie.split("=")[1];
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isCookie) {
      dispatch(userCreators.myUserAPI());
    }
  }, [isLogin, userPropensityType]);

  return (
    <React.Fragment>
      <Header />

      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={MainPage}></Route>
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

          {/* 테스트용입니다. */}
          <Route path="/test" exact component={PropensityTest}></Route>
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
