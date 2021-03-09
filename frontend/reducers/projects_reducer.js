import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT
} from "../actions/project_actions";

import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const projectReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type){
    case RECEIVE_PROJECTS:
      let projectId;
      for (projectId in action.projects){
        newState[projectId] = Object.assign(newState[projectId] || {}, action.projects[projectId]);
      }
      return newState;
    case RECEIVE_PROJECT:
      newState[action.project.id] = action.project;
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState
  };
};

export default projectReducer;