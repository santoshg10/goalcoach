import { SET_COMPLETE } from "../constants";
let goals = {
  goals: ""
};
export default (state = [], action) => {
  switch (action.type) {
    case SET_COMPLETE:
      console.log("in action", action);
      const { completeGoals } = action;
      return completeGoals;
    default:
      return state;
  }
};
