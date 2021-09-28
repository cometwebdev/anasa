import React from 'react';
import { connect } from 'react-redux';

import HomeHeaderContainer from '../header/home_header_container'
import SidebarContainer from '../sidebar/sidebar_container';

import { getProject } from '../../../actions/project_actions';

import ProjectEditForm from './project_edit_form';

const mapStateToProps = ({ entities }) => {
  const projectId = ownProps.match.params.teamId;
  //add default values for properties here so if project doesn't exist in state it will retain those values
  const project = {} 
  Object.assign(project, state.entities.projects[projectId]);
  return { 
    header: <HomeHeaderContainer title="Project Edit Page" />,
    sidebar: <SidebarContainer /> 
  };
};

const mapDispatchToProps = dispatch => {
  const projectId = ownProps.match.params.teamId;
  return {
    thunkEditProject: project => dispatch(createProject(project)),
    thunkGetProject: () => dispatch(getProject(projectId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreationForm);