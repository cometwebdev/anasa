import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";

export const receiveProjects = projects => {
  
  return {
    type: RECEIVE_PROJECTS,
    projects
  }
};

export const receiveProject = ({project, tasks}) => {

  return {
    type: RECEIVE_PROJECT,
    project,
    tasks
  }
};

export const getProjects = () => dispatch => {

  return APIUtil.getProjects()
         .then(projects => dispatch(receiveProjects(projects)));
};

export const getProject = (projectId) => dispatch => {

  return APIUtil.getProject(projectId)
          .then(project => dispatch(receiveProject(project)));
};

export const createProject = (project) => dispatch => {

  return APIUtil.createProject(project)
        .then(project => dispatch(receiveProject(project)));
};

export const updateProject = (project) => dispatch => {

  return APIUtil.updateProject(project)
        .then(project => dispatch(receiveProject(project)));
};
