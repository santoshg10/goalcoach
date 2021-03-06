import React, { Component } from "react";
import { goalRef } from "../firebase";
import { setGoals } from "../actions";
import { connect } from "react-redux";
import GoalItem from "./GoalItem";
class GoalList extends Component {
  componentDidMount() {
    let goals = [];
    goalRef.on("value", snap => {
      snap.forEach(goal => {
        const { email, title } = goal.val();
        const goalId = goal.key;
        goals.push({ email, title, goalId });
      });
    });

    this.props.setGoals(goals);
  }
  render() {
    return (
      <div>
        {" "}
        {this.props.goals.map((goal, index) => {
          return <GoalItem key={index} goal={goal} />;
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { goals } = state;
  return {
    goals
  };
}
export default connect(mapStateToProps, { setGoals })(GoalList);
