import React from 'react';

import { connect } from 'react-redux';

import HomeHeaderContainer from '../header/home_header_container'
import SidebarContainer from '../sidebar/sidebar_container';

import {
  updateTeam,
  getTeam 
} from '../../../actions/team_actions';

import TeamShow from './team_show';


const mapStateToProps = (state, ownProps) => {
  const teamId = ownProps.match.params.teamId;
  const team = state.entities.teams[teamId];
  // loading team name doesn't make sense bc all team names should be loaded by the index action
  // on teams controller
  const name = team ? team.name : "Loading Team Name...";
  const description = team ? team.description : undefined;
  const teammates = []
  if(team && team.teammateIds && team.teammateIds.length > 0){
    team.teammateIds.forEach(mateId => {
      let mate = state.entities.users[mateId];
      if(mate && mate.id && mate.email) teammates.push(mate);
    });
  }
  // change these into links to project pages
  const projects = team && team.projectIds ? team.projectIds.map(prjId => state.entities.projects[prjId] || {}) : [];
  
  return {
    id: teamId,
    header: <HomeHeaderContainer title="Team Show Page" />,
    sidebar: <SidebarContainer />,
    name,
    teammates,
    projects,
    description,
    team
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const teamId = ownProps.match.params.teamId;
  // have to make sure currentUser can't edit teams they aren't a part of

  return {
    thunkGetTeam: () => dispatch(getTeam(teamId)),
    thunkUpdateTeam: (team) => dispatch(updateTeam(team))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamShow);