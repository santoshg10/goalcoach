import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { firebaseApp } from './firebase';
import './App.css'

firebaseApp.auth().onAuthStateChanged(user => { 
  if  (user)  {
    console.log("user signed in", user);
  }  
  else  {
    console.log("user signedout")
  }
});

ReactDOM.render(
  <Router path= '/' history = {browserHistory}>
    <Route path='/app' component={App}>App</Route>
    <Route path='/signin' component={SignIn}>SignIn</Route>
    <Route path='/signup' component={SignUp}>SignUp</Route>

  </Router>,document.getElementById('root')
  //<App/>, document.getElementById('root')
);

