import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./reducers";

import { logUser } from "./actions";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { firebaseApp } from "./firebase";
import "./App.css";
const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const { email } = user;
    store.dispatch(logUser(email));
    console.log("user signed in", user.email);
    browserHistory.push("/app");
  } else {
    console.log("user signedout");
    browserHistory.replace("/signin");
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App}>
        App
      </Route>
      <Route path="/signin" component={SignIn}>
        SignIn
      </Route>
      <Route path="/signup" component={SignUp}>
        SignUp
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
  //<App/>, document.getElementById('root')
);
