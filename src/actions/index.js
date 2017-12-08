import { SIGNED_IN, SET_GOALS, SET_COMPLETE } from "../constants";

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email: email
  };
  return action;
}
export function setGoals(goals) {
  const action = {
    type: SET_GOALS,
    goals: goals
  };
  return action;
}

export function setCompleted(completeGoals) {
  let action = {
    type: SET_COMPLETE,
    completeGoals
  };
  console.log("in actons", action);
  return action;
}
