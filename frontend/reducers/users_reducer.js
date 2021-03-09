import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TEAMS, RECEIVE_TEAM  } from '../actions/team_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = { [action.currentUser.id]: action.currentUser }
      return Object.assign({}, oldState, currentUser);
    case RECEIVE_TEAM:
      return Object.assign({}, oldState, action.teammates);
    case RECEIVE_TEAMS:
      return Object.assign({}, oldState, action.teammates);
    default:
      return oldState;
  }
};

export default usersReducer;