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
  debugger
  const teams = state.entities.teams;
  const teammateIds = prj && prj.team_id && teams[prj.team_id] ? teams[prj.team_id].teammateIds : [];
  const teammates = [];
  teammateIds.forEach(id => {
    if(state.entities.users[id]) teammates.push(state.entities.users[id]);
  })
  // taskIds.forEach(taskId => tasks[taskId] = state.entities.tasks.projectTasks[taskId]);
  taskIds.forEach(taskId => tasks[taskId] = state.entities.tasks[taskId]);
  
  return {
    tasks,
    teammates
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // have to make sure currentUser can't edit project tasks they aren't a part of

  return {
    thunkUpdateTask: task => dispatch(updateProjectTask(task)),
    thunkCreateTask: task => dispatch(createProjectTask(task)),
    thunkDeleteTask: task => dispatch(deleteProjectTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTasks);