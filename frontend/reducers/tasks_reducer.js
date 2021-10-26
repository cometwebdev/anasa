import {
  RECEIVE_TASKS,
  RECEIVE_TASK
} from "../actions/task_actions";

import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TEAM } from '../actions/team_actions';
const projectReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type){
    case RECEIVE_TEAM:
    case RECEIVE_PROJECT:
    case RECEIVE_PROJECTS:
      //intentional fallthrough -- same functionality as RECEIVE_PROJECTS
    case RECEIVE_TASKS:
      let taskId;
      for (taskId in action.tasks){
        newState[taskId] = Object.assign(newState[taskId] || {}, action.tasks[taskId]);
      }
      return newState;
    case RECEIVE_TASK:
      newState[action.task.id] = action.task;
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState
  };
};

export default taskReducer;