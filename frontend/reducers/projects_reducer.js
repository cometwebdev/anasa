import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT
} from "../actions/project_actions";

import {
  RECEIVE_PROJECT_TASK,
  REMOVE_PROJECT_TASK
} from '../actions/project_task_actions';

import { RECEIVE_USER } from '../actions/user_actions';
// Honestly not sure if receive user is ever being dispatched or whether its always just receive current user

import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TEAM } from '../actions/team_actions';
const projectReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type){
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
    case RECEIVE_TEAM:
      //intentional fallthrough -- same functionality as RECEIVE_PROJECTS
    case RECEIVE_PROJECTS:
      let projectId;
      for (projectId in action.projects){
        newState[projectId] = Object.assign(newState[projectId] || {}, action.projects[projectId]);
      }
      return newState;
    case RECEIVE_PROJECT:
      let project = action.project;
      project.taskIds = new Set
      if (action.tasks) Object.keys(action.tasks).forEach(id => project.taskIds.add(parseInt(id)))
      newState[action.project.id] = action.project;
      return newState;
    case RECEIVE_PROJECT_TASK:
      newState[action.task.prj_id].taskIds.add(action.task.id);
      return newState;
    case REMOVE_PROJECT_TASK:
      const prj_id = action.task.prj_id;
      const task_id = action.task.id;
      newState[prj_id].taskIds.delete(task_id);
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  };
};

export default projectReducer;