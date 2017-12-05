import React, { Component } from "react";
import { firebaseApp } from "../firebase";
import {Link}from 'react-router';
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  }

  SignIn_func() {
    console.log(this.state.email, this.state.password);
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="BoxStyle">
        <h2> SignIn </h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control "
            onChange={event => this.setState({ email: event.target.value })}
            placeholder="Email"
          />
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={event => this.setState({ password: event.target.value })}
            placeholder="Password"
          />

          <button
            className="btn btn-primary btn-md"
            onClick={() => this.SignIn_func()}
          >
            SignIn{" "}
          </button>
          <div> {this.state.error.message} </div>
          <div> <Link to ={'/signup'}>Signup </Link> </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
