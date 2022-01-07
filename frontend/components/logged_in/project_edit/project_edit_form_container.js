import React from 'react';
import { connect } from 'react-redux';

import HomeHeaderContainer from '../header/home_header_container'
import SidebarContainer from '../sidebar/sidebar_container';

import { getProject, updateProject } from '../../../actions/project_actions';

import ProjectEditForm from './project_edit_form';

const mapStateToProps = ({ entities }, ownProps) => {
  const projectId = ownProps.match.params.teamId;
  //add default values for properties here so if project doesn't exist in state it will retain those values
  const project = {id: projectId, team_id: null};
  Object.assign(project, entities.projects[projectId]);
  return { 
    project,
    header: <HomeHeaderContainer title="Project Edit Page" />,
    sidebar: <SidebarContainer /> 
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const projectId = ownProps.match.params.teamId;
  // have to make sure currentUser can't edit projects they aren't a part of
  return {
    thunkEditProject: project => dispatch(updateProject(project)),
    thunkGetProject: () => dispatch(getProject(projectId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditForm);