import {
  RECEIVE_TEAMS,
  RECEIVE_TEAM
} from '../actions/team_actions';

const teamReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type){
    case RECEIVE_TEAMS:
      let teamId;
      for (teamId in action.teams){
        if (teamId in newState){
          newState[teamId].name = action.teams[teamId].name;
        }
        else{
          newState[teamId] = action.teams[teamId];
        }
      };
      return newState;
    case RECEIVE_TEAM:
      newState[action.team.id] = action.team;
      return newState;
    default:
      return oldState;
  };
};

export default teamReducer;