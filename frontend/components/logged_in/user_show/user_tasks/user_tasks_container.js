import React from 'react';
import { connect } from 'react-redux';

import {
  updateUserTask,
  createUserTask,
  deleteUserTask
} from '../../../../actions/user_task_actions';

import {
  updateUserTask,
  createUserTask,
  deleteUserTask
} from '../../../../actions/user_task_actions';


import UserTasks from './user_tasks';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.user[ownProps.id];
  const taskIds = user && user.taskIds ? user.taskIds : [];
  const tasks = {};
  taskIds.forEach(taskId => tasks[taskId] = state.entities.tasks[taskId]);
  return {
    tasks
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    thunkProjectUpdateTask: task => dispatch(updateProjectTask(task)),
    thunkProjectCreateTask: task => dispatch(createProjectTask(task)),
    thunkProjectDeleteTask: task => dispatch(deleteProjectTask(task)),
    thunkUserUpdateTask: task => dispatch(updateUserTask(task)),
    thunkUserCreateTask: task => dispatch(createUserTask(task)),
    thunkUserDeleteTask: task => dispatch(deleteUserTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTasks);