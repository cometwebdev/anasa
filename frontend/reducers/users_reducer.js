import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = { [action.currentUser.id]: action.currentUser }
      return Object.assign({}, oldState, currentUser);
    default:
      return oldState;
  }
};

export default usersReducer;