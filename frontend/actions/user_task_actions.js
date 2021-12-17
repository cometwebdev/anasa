import * as APIUtil from '../util/user_task_api_util';

export const RECEIVE_USER_TASK = "RECEIVE_TASK";
export const RECEIVE_USER_TASKS = "RECEIVE_TASKS";
export const REMOVE_USER_TASK = "REMOVE_TASK";

export const receiveUserTasks = tasks => {
  
  return {
    type: RECEIVE_USER_TASKS,
    tasks
  }
};

export const receiveUserTask = task => {

  return {
    type: RECEIVE_USER_TASK,
    task
  }
};

export const removeUserTask = taskId => {
  return {
    type: REMOVE_USER_TASK,
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

export const createUserTask = (task) => dispatch => {

  return APIUtil.createUserTask(task)
        .then(() => dispatch(receiveUserTask(task)));
};

export const updateUserTask = (task) => dispatch => {

  return APIUtil.updateUserTask(task)
        .then(() => dispatch(receiveUserTask(task)));
};

export const deleteUserTask = taskId => dispatch => {

  return APIUtil.deleteUserTask(taskId)
         .then(() => dispatch(removeUserTask(taskId)));
}