import React, { Component } from "react";
import { connect } from "react-redux";
import { goalRef } from "../firebase";

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  addGoal(goal) {
    const { title } = this.state;
    const { email } = this.props.user;
    console.log(goal);
    goalRef.push({ email: email, title: title });
  }
  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add Goal"
            className="form-control"
            style={{ marginRight: "5px" }}
            onChange={event => this.setState({ title: event.target.value })}
          />
          <button
            className="btn btn-primary"
            onClick={event => this.addGoal(event)}
          >
            Add Goal{" "}
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  // console.log("state", state);
  const { user } = state;
  return {
    user
  };
}
export default connect(mapStateToProps, null)(AddGoal);
