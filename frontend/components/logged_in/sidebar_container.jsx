import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './sidebar'


import { getTeams } from '../../actions/team_actions';
import { getTeam } from '../../util/team_api_util';

const mapStateToProps = (state) => {
  const teams = Object.values(state.entities.teams);
  return {
    teams
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    thunkGetTeam: () => dispatch(getTeams()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);