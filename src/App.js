import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router';
import AddGoal from "./components/Addgoal";
import GoalList from "./components/GoalList";
import { goalRef,  firebaseApp} from "./firebase";
import CompleteGoals from "./components/CompleteGoalList";

class App extends Component {
  signOut() {
    console.log("signout");
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div style={{ margin: "5px" }}>

        <h2>Goal Coach</h2>
        <h3><Link to={'/goalsHome'}>Goal Home</Link> </h3>
        <h3><Link to={'/mapsHome'}>Google Maps</Link> </h3>
        
        <div style={{ textAlign: "right" }}>
          <button className="btn btn-danger" onClick={() => this.signOut()}>
            SignOut
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  //console.log("state", state);
  return {};
}
export default connect(mapStateToProps, null)(App);
