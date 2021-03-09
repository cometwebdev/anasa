import * as APIUtil from '../util/team_api_util';

export const RECEIVE_TEAMS = "RECEIVE_TEAMS";
export const RECEIVE_TEAM = "RECEIVE_TEAM";

// original receiveTeams
// export const receiveTeams = (teams) => {

//   return {
//     type: RECEIVE_TEAMS,
//     teams
//   };
// };

// new receiveTeams (in progress)
export const receiveTeams = ({ teams, teammates }) => {
  // debugger
  return {
    type: RECEIVE_TEAMS,
    teams,
    teammates
  };
};

export const receiveTeam = ({ team, teammates }) => {

  return {
    type: RECEIVE_TEAM,
    team,
    teammates
  };
};

// original getTeams
// export const getTeams = () => dispatch => {

//   return APIUtil.getTeams()
//         .then(receivedTeams => dispatch(receiveTeams(receivedTeams)));
// };

// new getTeams (in progress)
export const getTeams = () => dispatch => {

  return APIUtil.getTeams()
        .then(payload => dispatch(receiveTeams(payload)));
};

export const getTeam = (teamId) => dispatch => {

  return APIUtil.getTeam(teamId)
         .then(receivedTeam => dispatch(receiveTeam(receivedTeam)));
};

export const createTeam = (team) => dispatch => {

  return APIUtil.createTeam(team)
        .then(receivedTeam => dispatch(receiveTeam(receivedTeam)));
};

export const updateTeam = (team) => dispatch => {

  return APIUtil.updateTeam(team)
        .then(receivedTeam => dispatch(receiveTeam(receivedTeam)));
};