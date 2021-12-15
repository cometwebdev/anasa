import * as APIUtil from '../util/project_task_api_util';

export const RECEIVE_PROJECT_TASK = "RECEIVE_PROJECT_TASK";
export const RECEIVE_PROJECT_TASKS = "RECEIVE_PROJECT_TASKS";
export const REMOVE_PROJECT_TASK = "REMOVE_PROJECT_TASK";

export const receiveProjectTasks = tasks => {
  
  return {
    type: RECEIVE_PROJECT_TASKS,
    tasks
  }
};

export const receiveProjectTask = task => {

  return {
    type: RECEIVE_TASK,
    task
  }
};

export const removeProjectTask = taskId => {
  return {
    type: REMOVE_PROJECT_TASK,
    taskId
  }
}

// export const gettasks = () => dispatch => {

//   return APIUtil.getTasks()
//          .then(tasks => dispatch(receivetasks(tasks)));
// };

// export const gettask = (taskId) => dispatch => {

//   return APIUtil.gettask(taskId)
//           .then(task => dispatch(receivetask(task)));
// };

export const createProjectTask = (task) => dispatch => {

  return APIUtil.createProjectTask(task)
        .then(() => dispatch(receiveProjectTask(task)));
};

export const updateProjectTask = (task) => dispatch => {

  return APIUtil.updateProjectTask(task)
        .then(() => dispatch(receiveProjectTask(task)));
};

export const deleteProjectTask = taskId => dispatch => {

  return APIUtil.deleteProjectTask(taskId)
         .then(() => dispatch(removeProjectTask(taskId)));
}