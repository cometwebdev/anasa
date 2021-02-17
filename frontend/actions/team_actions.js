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
