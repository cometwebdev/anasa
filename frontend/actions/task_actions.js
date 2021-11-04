import * as APIUtil from '../util/task_api_util';

export const RECEIVE_TASK = "RECEIVE_TASK";
export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const REMOVE_TASK = "REMOVE_TASK";

export const receiveTasks = tasks => {
  
  return {
    type: RECEIVE_TASKS,
    tasks
  }
};

export const receiveTask = task => {

  return {
    type: RECEIVE_TASK,
    task
  }
};

export const removeTask = taskId => {
  return {
    type: REMOVE_TASK,
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

export const createTask = (task) => dispatch => {

  return APIUtil.createTask(task)
        .then(() => dispatch(receiveTask(task)));
};

export const updateTask = (task) => dispatch => {

  return APIUtil.updateTask(task)
        .then(() => dispatch(receiveTask(task)));
};

export const deleteTask = taskId => dispatch => {

  return APIUtil.deleteTask(taskId)
         .then(() => dispatch(removeTask(taskId)));
}