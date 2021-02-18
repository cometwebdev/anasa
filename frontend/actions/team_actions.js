import * as APIUtil from '../util/team_api_util';

export const RECEIVE_TEAMS = "RECEIVE_TEAMS";
export const RECEIVE_TEAM = "RECEIVE_TEAM";


export const receiveTeams = (teams) => {

  return {
    type: RECEIVE_TEAMS,
    teams
  };
};

export const receiveTeam = (team) => {

  return {
    type: RECEIVE_TEAM,
    team
  };
};


export const getTeams = () => dispatch => {

  return APIUtil.getTeams()
        .then(receivedTeams => dispatch(receiveTeams(receivedTeams)));
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