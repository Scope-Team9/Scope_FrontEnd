/* eslint-disable */
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "../pages/MainPage";
import KakaoRedirect from "./KakaoRedirect";
import GitHubRedirect from "./GitHubRedirect";
import MyPage from "../pages/MyPage";
import PostAdd from "../pages/PostAdd";
import PostDetail from "../pages/PostDetail";
import Markdown from "../components/Markdown";
import MarkdownRead from "../components/MarkdownRead";
import styled from "styled-components";
import Header from "../components/Header";

function App() {
  return (
    <React.Fragment>
      <Header />

      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/mypage" exact component={MyPage}></Route>
          <Route path="/postwrite" exact component={PostAdd}></Route>
          <Route path="/postdetail" exact component={PostDetail}></Route>
          <Route path="/markdown" exact component={Markdown}></Route>
          <Route path="/markdownread" exact component={MarkdownRead}></Route>
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
    </React.Fragment>
  );
}

export default App;
