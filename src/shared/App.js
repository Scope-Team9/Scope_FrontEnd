/* eslint-disable */
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Text from "../pages/Text";
import Header from "../components/Header";
import MainPage from "../pages/MainPage";
import Post from "../pages/Post";
import PostDetail from "../pages/PostDetail";
import MyPage from "../pages/MyPage";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/post" exact component={Post}></Route>
          <Route path="/postdetail" exact component={PostDetail}></Route>
          <Route path="/mypage" exact component={MyPage}></Route>
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
