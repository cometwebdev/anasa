import {
  RECEIVE_PROJECT
} from "../actions/project_actions";

import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

import {
  RECEIVE_TASKS,
  RECEIVE_TASK
} from "../actions/task_actions";

const taskReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type){
    case RECEIVE_PROJECT:
      //intentional fallthrough -- same functionality as RECEIVE_PROJECTS
    case RECEIVE_TASKS:
      debugger
      let task;
      for (task of action.tasks){
        newState[task.id] = Object.assign(newState[task.id] || {}, task);
      }
      return newState;
    case RECEIVE_TASK:
      newState[action.task.id] = action.task;
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  };
};

export default taskReducer;