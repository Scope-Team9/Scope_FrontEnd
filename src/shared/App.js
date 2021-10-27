/* eslint-disable */
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "../pages/MainPage";
import KakaoRedirect from "./KakaoRedirect";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          <Route
            path="/user/kakao/callback"
            exact
            component={KakaoRedirect}
          ></Route>
          <Route
            path="/user/github/callback"
            exact
            component={KakaoRedirect}
          ></Route>
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
