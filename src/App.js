import React, { Component } from "react";
import { connect } from "react-redux";
import AddGoal from "./components/Addgoal";
import GoalList from "./components/GoalList";
import { goalRef } from "./firebase";
import CompleteGoals from "./components/CompleteGoalList";
class App extends Component {
  signOut() {
    console.log("signout");
  }
  render() {
    return (
      <div style={{ margin: "5px" }}>
        <h2>Goal Coach</h2>
        <AddGoal> </AddGoal>
        <h3>Goals</h3>
        <GoalList />

        <CompleteGoals> </CompleteGoals>
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
