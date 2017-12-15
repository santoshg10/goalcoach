import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router';
import AddGoal from "./Addgoal";
import GoalList from "./GoalList";
import { goalRef, firebaseApp } from "../firebase";
import CompleteGoals from "./CompleteGoalList";

class GoalHome extends Component {
  render() {
    return (
      <div><h3>Goals Home</h3>
        <AddGoal> </AddGoal>
        <h3>Goals</h3>
        <GoalList />
        <CompleteGoals> </CompleteGoals>
      </div>
    );
  }
};
function mapStateToProps(state) {
  //console.log("state", state);
  return {};
}
export default connect(mapStateToProps, null)(GoalHome);
