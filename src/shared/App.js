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

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/mypage" exact component={MyPage}></Route>
          <Route path="/postadd" exact component={PostAdd}></Route>
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
    </React.Fragment>
  );
}

export default App;
