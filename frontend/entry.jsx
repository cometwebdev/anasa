import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", ()=>{
  const rootEl = document.getElementById("root");
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  ReactDOM.render(<h1>React is working</h1>, rootEl);
});