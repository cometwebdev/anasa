import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signup, login, logout } from './actions/session_actions';
import { getTeams, getTeam, createTeam, updateTeam, receiveTeams } from './actions/team_actions';
import { getProject, getProjects, createProject, updateProject } from './util/project_api_util';
document.addEventListener("DOMContentLoaded", ()=>{
  let store;
  if(window.currentUser){
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  window.getTeams = getTeams;
  window.getTeam = getTeam;
  window.createTeam = createTeam;
  window.updateTeam = updateTeam;
  window.receiveTeams = receiveTeams;

  window.getProjects = getProjects;
  window.getProject = getProject;
  window.createProject = createProject;
  window.updateProject = updateProject;
  
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});