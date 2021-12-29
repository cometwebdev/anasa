import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TEAMS, RECEIVE_TEAM  } from '../actions/team_actions';
import { RECEIVE_USER } from '../actions/user_actions';

import {
  RECEIVE_USER_TASK,
  RECEIVE_USER_TASKS,
  REMOVE_USER_TASK
} from "../actions/user_task_actions";

import {
  RECEIVE_PROJECT_TASK,
  RECEIVE_PROJECT_TASKS,
  REMOVE_PROJECT_TASK
} from "../actions/project_task_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = { [action.currentUser.user.id]: action.currentUser.user }
      return Object.assign({}, oldState, currentUser);
    case RECEIVE_TEAM:
    case RECEIVE_TEAMS:
      for(let teammateId in action.teammates){
        newState[teammateId] = Object.assign(newState[teammateId] || {}, action.teammates[teammateId]);
      }
      return newState;
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      newState[action.user.id].taskIds = new Set(Object.keys(action.tasks));
      newState[action.user.id].prjIds = new Set(Object.keys(action.projects));
      return newState;
    case RECEIVE_PROJECT_TASKS:
    case RECEIVE_USER_TASKS:
      return newState;
    case RECEIVE_PROJECT_TASK:
    case RECEIVE_USER_TASK:
      
      newState[action.task.assignee_id].taskIds.add(action.task.id);
      return newState;
    case REMOVE_PROJECT_TASK:
      if(action.task.assignee_id) newState[action.task.assignee_id].taskIds.delete(action.task.id);
      return newState;
    case REMOVE_USER_TASK:
      newState[action.task.assignee_id].taskIds.delete(action.task.id);
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default usersReducer;