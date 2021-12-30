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
    type: RECEIVE_PROJECT_TASK,
    task
  }
};

export const removeProjectTask = task => {
  return {
    type: REMOVE_PROJECT_TASK,
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

export const createProjectTask = (task) => dispatch => {

  return APIUtil.createProjectTask(task)
        .then((receivedTask) => {
            dispatch(receiveProjectTask(receivedTask));
          }
        );
};

export const updateProjectTask = (task) => dispatch => {
  return APIUtil.updateProjectTask(task)
        .then((receivedTask) => {
          dispatch(receiveProjectTask(receivedTask))
        })
        .fail((res) => {
          console.log("update failed");
        })
};

export const deleteProjectTask = task => dispatch => {
  return APIUtil.deleteProjectTask(task)
         .then((receivedTask) => dispatch(removeProjectTask(receivedTask)));
}