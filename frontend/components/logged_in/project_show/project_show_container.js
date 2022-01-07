import React from 'react';

import { connect } from 'react-redux';

import HomeHeaderContainer from '../header/home_header_container'
import SidebarContainer from '../sidebar/sidebar_container';
import ProjectTasksContainer from './project_tasks/project_tasks_container';

import {
  updateProject,
  getProject
} from '../../../actions/project_actions';




import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => {
  const prjId = ownProps.match.params.projectId;
  const prj = state.entities.projects[prjId];
  const name = prj ? prj.name : undefined;
  
  
  return {
    id: prjId,
    header: <HomeHeaderContainer title="Project Show Page" />,
    sidebar: <SidebarContainer />,
    name,
    tasks: <ProjectTasksContainer id={prjId} />,
    prj
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const projectId = ownProps.match.params.projectId;
  // have to make sure currentUser can't edit projects they aren't a part of

  return {
    thunkGetProject: () => dispatch(getProject(projectId)),
    thunkUpdateProject: prj => dispatch(updateProject(prj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);