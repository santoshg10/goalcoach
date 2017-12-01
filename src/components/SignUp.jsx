import React, { Component } from "react";
import "../App.css";
import {firebaseApp} from '../firebase';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {
        message: ''
      }
    };
  }
  Signup_func () {
    console.log(this.state.email, this.state.password);
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
        console.log('error', error);
      this.setState(error);
    })
    // catch(error =>  {
    
    // })
  }
  render() {
    return (
      <div className="BoxStyle">
        <h2> SignUp </h2>
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
            onClick={() => this.Signup_func()}
          >
            SignUp{" "}
          </button>
          <div> {this.state.error.message} </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
