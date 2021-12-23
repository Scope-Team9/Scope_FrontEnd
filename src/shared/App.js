/* eslint-disable */
import React, { Suspense, lazy } from "react";
import "./App.css";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userCreators } from "../redux/modules/user";

import MainPage from "../pages/MainPage";
import Header from "../components/Header";
import MyPageInfo from "../components/MyPageInfo";

function App() {
  // const MainPage = lazy(() => import("../pages/MainPage"));
  const KakaoRedirect = lazy(() => import("./kakaoRedirect"));
  const GitHubRedirect = lazy(() => import("./GitHubRedirect"));
  // const MyPageInfo = lazy(() => import("../components/MyPageInfo"));
  const PostWrite = lazy(() => import("../pages/PostWrite"));
  const PostEdit = lazy(() => import("../pages/PostEdit"));
  const PostDetail = lazy(() => import("../pages/PostDetail"));
  const Markdown = lazy(() => import("../components/Markdown"));
  // const Header = lazy(() => import("../components/Header"));
  const Footer = lazy(() => import("../components/Footer"));
  const NotFound = lazy(() => import("../shared/NotFound"));

  const isLogin = useSelector(state => state.user.isLogin);
  const userInfo = useSelector(state => state.user);
  const isCookie = document.cookie.split("=")[1];
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    if (isCookie) {
      dispatch(userCreators.myUserAPI());
    }
  }, [isLogin, isCookie]);

  return (
    <Router>
      <Suspense fallback={<></>}>
        <div className="App">
          <Header />
          <ConnectedRouter history={history}>
            <Switch>
              <Route path="/" exact component={MainPage}></Route>
              <Route path="/mypage/:id" exact component={MyPageInfo}></Route>
              <Route path="/postadd" exact component={PostWrite}></Route>
              <Route path="/postedit/:id" exact component={PostEdit}></Route>
              <Route path="/addmarkdown" exact component={Markdown}></Route>
              <Route
                path="/postdetail/:id"
                exact
                component={PostDetail}
              ></Route>
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
              <Route component={NotFound}></Route>
            </Switch>
          </ConnectedRouter>
          <Footer userInfo={userInfo} />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
