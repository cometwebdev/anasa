import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () =>({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (

  APIUtil.signup(user)
  .then(receivedUser => dispatch(receiveCurrentUser(receivedUser)))
  .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
  .then(receivedUser => dispatch(receiveCurrentUser(receivedUser)))
  .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(() => dispatch(logoutCurrentUser()))
);

// make sure demoUser defined here appears in
// ../../db/seeds.rb with the exact same credentials

const demoUser = {
  "email": "awesome@possums.com",
  "password": "Possums-Are-Awesome"
};

export const loginDemo = () => login(demoUser);