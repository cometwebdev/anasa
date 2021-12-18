import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = ({user, tasks}) => {
  return {
    type: RECEIVE_USER,
    user,
    tasks
  };
};

export const getUser = (userId) => dispatch => {
  return APIUtil.getUser(userId)
        .then(payload => dispatch(receiveUser(payload)));
};

export const updateUser = (user) => dispatch => {
  return APIUtil.updateUser(user)
        .then(payload => dispatch(receiveUser(payload)));
};