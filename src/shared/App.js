/* eslint-disable */
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Text from "../pages/Text";
import MainPage from "../pages/MainPage";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' exact component={MainPage}></Route>
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
