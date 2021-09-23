import React from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';

const mapStateToProps = ({ entities }) => {
  return { teams: entities.teams };
};

const mapDispatchToProps = dispatch => {
  return {
    thunkCreateProject: project => dispatch(createProject(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);