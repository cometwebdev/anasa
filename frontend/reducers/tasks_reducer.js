// import { combineReducers } from 'redux';
// import projectTasks from './project_tasks_reducer';

// uncomment when user tasks are implemented
// import userTasks from './user_tasks_reducer';

// uncomment when user tasks are implemented
// const tasksReducer = combineReducers({projectTasks, userTasks});
// const tasksReducer = combineReducers({projectTasks});

import {
  RECEIVE_PROJECT
} from "../actions/project_actions";

import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

import {
  RECEIVE_PROJECT_TASKS,
  RECEIVE_PROJECT_TASK,
  REMOVE_PROJECT_TASK
} from "../actions/project_task_actions";


import {
    RECEIVE_USER_TASK,
    RECEIVE_USER_TASKS ,
    REMOVE_USER_TASK
} from "../actions/user_task_actions";

import {
  RECEIVE_USER
} from "../actions/user_actions";


const tasksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_PROJECT:
      //intentional fallthrough -- same functionality as RECEIVE_PROJECTS
    case RECEIVE_PROJECT_TASKS:
    case RECEIVE_USER_TASKS:
      //tasks from project should
      let taskId;
      for (taskId in action.tasks){
        newState[taskId] = Object.assign(newState[taskId] || {}, action.tasks[taskId]);
      }
      return newState;
    case RECEIVE_PROJECT_TASK:
    case RECEIVE_USER_TASK:
      newState[action.task.id] = action.task;
      return newState;
    case REMOVE_PROJECT_TASK:
    case REMOVE_USER_TASK:
      delete newState[action.task.id];
      return newState;
    case RECEIVE_USER:
      for (taskId in action.tasks){
        newState[taskId] = Object.assign(newState[taskId] || {}, action.tasks[taskId]);
      }
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  };
};


export default tasksReducer;