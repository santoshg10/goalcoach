import React, { Component } from "react";
import { connect } from "react-redux";
import { setCompleted } from "../actions";
import { completeGoalRef } from "../firebase";

class CompleteGoalsComponent extends Component {
  componentDidMount() {
    let completeGoals = [];
    completeGoalRef.on("value", snap => {
      snap.forEach((goal, index) => {
        const { email, title } = goal.val();
        completeGoals.push({ email, title });
      });
    });
    this.props.setCompleted(completeGoals);
  }
  clearAll() {
    completeGoalRef.set([]);
  }
  render() {
    console.log("this.props.setCompleted", this.props.completeGoals);
    return (
      <div>
        <h3>Completed List</h3>
        <button className="btn btn-success" onClick={() => this.clearAll()}>
          clear All
        </button>
        {this.props.completeGoals.map((completeGoal, index) => {
          const { email, title } = completeGoal;
          return (
            <div>
              <strike key={index}>{title}</strike>
            </div>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("state", state);
  const { completeGoals } = state;
  return { completeGoals };
}
export default connect(mapStateToProps, { setCompleted })(
  CompleteGoalsComponent
);
//export default CompleteGoalsComponent;
