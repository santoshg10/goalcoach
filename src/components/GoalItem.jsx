import React, { Component } from "react";
import { connect } from "react-redux";
import { completeGoalRef, goalRef } from "../firebase";
class GoalItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     goalItem: ""
  //   };
  // }
  completeGoal() {
    const { email } = this.props.user;
    const { title, goalId } = this.props.goal;
    goalRef.child(goalId).remove();
    completeGoalRef.push({ email, title });
  }
  render() {
    const { email, title } = this.props.goal;
    return (
      <div>
        <strong>{title}</strong>
        <span>
          Submitted By <em>{email} </em>
        </span>
        <button className="btn btn-primary" onClick={() => this.completeGoal()}>
          Complete
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state;
  return { user };
}
export default connect(mapStateToProps, null)(GoalItem);
