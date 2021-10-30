import React from 'react';

import { connect } from 'react-redux';

import HomeHeaderContainer from '../header/home_header_container'
import SidebarContainer from '../sidebar/sidebar_container';

import {
  updateProject,
  getProject
} from '../../../actions/project_actions';

import {
  updateTask,
  createTask
} from '../../../actions/task_actions';


import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => {
  const prjId = ownProps.match.params.projectId;
  const prj = state.entities.projects[prjId];
  const name = prj ? prj.name : undefined;
  const tasks = prj && prj.taskIds ? prj.taskIds.map(id => state.entities.tasks[id]) : [];
  return {
    id: prjId,
    header: <HomeHeaderContainer title="Project Show Page" />,
    sidebar: <SidebarContainer />,
    name,
    tasks
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const projectId = ownProps.match.params.projectId;
  return {
    thunkGetProject: () => dispatch(getProject(projectId)),
    thunkUpdateProject: prj => dispatch(updateProject(prj)),
    thunkUpdateTask: task => dispatch(updateTask(task)),
    thunkCreateTask: task => dispatch(createTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);