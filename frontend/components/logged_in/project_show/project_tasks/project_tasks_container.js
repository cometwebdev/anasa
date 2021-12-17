import React from 'react';
import { connect } from 'react-redux';

import {
  updateProjectTask,
  createProjectTask,
  deleteProjectTask
} from '../../../../actions/project_task_actions';



import ProjectTasks from './project_tasks';

const mapStateToProps = (state, ownProps) => {
  const prj = state.entities.projects[ownProps.id];
  const taskIds = prj && prj.taskIds ? prj.taskIds : [];
  const tasks = {};
  // taskIds.forEach(taskId => tasks[taskId] = state.entities.tasks.projectTasks[taskId]);
  taskIds.forEach(taskId => tasks[taskId] = state.entities.tasks[taskId]);
  return {
    tasks
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    thunkUpdateTask: task => dispatch(updateProjectTask(task)),
    thunkCreateTask: task => dispatch(createProjectTask(task)),
    thunkDeleteTask: task => dispatch(deleteProjectTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTasks);