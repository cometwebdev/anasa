// why I was getting an error callback firing even though server status was 200:
//  ajax default has datatype json -- server wasn't returning json so that failed
// https://stackoverflow.com/questions/6186770/ajax-request-returns-200-ok-but-an-error-event-is-fired-instead-of-success
// how to fix -- change the datatype: 
// https://stackoverflow.com/questions/2722750/ajax-datatype

export const createUserTask = (task)  => {
  const sentTask={};
  Object.assign(sentTask, task, {taskable_type: "User"})
  return $.ajax({
    method: 'POST',
    url: `/api/tasks`,
    // dataType: "text",
    data: { task: sentTask }
  });
};


export const updateUserTask = (task)  => {
  const sentTask={};
  Object.assign(sentTask, task, {taskable_type: "User"})
  return $.ajax({
    method: 'PATCH',
    url: `/api/tasks/${task.id}`,
    dataType: "text",
    data: { task: sentTask }
  });
};

export const deleteUserTask = (task) => {
  const sentTask={};
  Object.assign(sentTask, task, {taskable_type: "User"})
  
  return $.ajax({
    method: 'DELETE',
    dataType: "text",
    url: `/api/tasks/${task.id}`,
    data: { task: sentTask }
  });
}