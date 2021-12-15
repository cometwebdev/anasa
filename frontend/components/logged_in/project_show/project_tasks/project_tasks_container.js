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
  const taskIds = prj ? prj.taskIds : [];
  // const tasks = {};
  // debugger
  // taskIds.forEach(taskId => tasks[taskId] = state.entities.tasks.ProjectTasks[taskId]);
  const tasks = state.entities.tasks.projectTasks || {1: {id: 1, name: "Fake Task"} };
  return {
    tasks
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    thunkUpdateTask: task => dispatch(updateProjectTask(task)),
    thunkCreateTask: task => dispatch(createProjectTask(task)),
    thunkDeleteTask: taskId => dispatch(deleteProjectTask(taskId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTasks);