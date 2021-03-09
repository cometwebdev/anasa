import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";

export const receiveProjects = projects => {
  
  return {
    type: RECEIVE_PROJECTS,
    projects
  }
};

export const receiveProject = project => {

  return {
    type: RECEIVE_PROJECT,
    project
  }
};