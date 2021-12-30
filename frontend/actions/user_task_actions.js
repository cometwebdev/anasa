import * as APIUtil from '../util/user_task_api_util';

export const RECEIVE_USER_TASK = "RECEIVE_USER_TASK";
export const RECEIVE_USER_TASKS = "RECEIVE_USER_TASKS";
export const REMOVE_USER_TASK = "REMOVE_USER_TASK";

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

export const removeUserTask = task => {
  return {
    type: REMOVE_USER_TASK,
    task
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
        .then((receivedTask) => dispatch(receiveUserTask(receivedTask)));
};

export const updateUserTask = (task) => dispatch => {

  return APIUtil.updateUserTask(task)
        .then((receivedTask) => dispatch(receiveUserTask(receivedTask)));
};

export const deleteUserTask = task => dispatch => {

  return APIUtil.deleteUserTask(task)
         .then((receivedTask) => dispatch(removeUserTask(receivedTask)));
}