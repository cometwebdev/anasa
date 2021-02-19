import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './sidebar'


import { getTeams } from '../../actions/team_actions';


const mapStateToProps = (state) => {
  const teams = Object.values(state.entities.teams);
  return {
    teams
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    thunkGetTeams: () => dispatch(getTeams()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);