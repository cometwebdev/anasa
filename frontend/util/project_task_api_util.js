// why I was getting an error callback firing even though server status was 200:
//  ajax default has datatype json -- server wasn't returning json so that failed
// https://stackoverflow.com/questions/6186770/ajax-request-returns-200-ok-but-an-error-event-is-fired-instead-of-success
// how to fix -- change the datatype: 
// https://stackoverflow.com/questions/2722750/ajax-datatype

export const createProjectTask = (task)  => {
  const sentTask={};
  Object.assign(sentTask, task, {taskable_type: "Project"})
  return $.ajax({
    method: 'POST',
    url: `/api/tasks`,
    dataType: "text",
    data: { task: sentTask }
  });
};


export const updateProjectTask = (task)  => {
  const sentTask={};
  Object.assign(sentTask, task, {taskable_type: "Project"})
  return $.ajax({
    method: 'PATCH',
    url: `/api/tasks/${task.id}`,
    dataType: "text",
    data: { task: sentTask }
  });
};

export const deleteProjectTask = (task) => {
  const sentTask={};
  Object.assign(sentTask, task, {taskable_type: "Project"})
  
  return $.ajax({
    method: 'DELETE',
    dataType: "text",
    url: `/api/tasks/${task.id}`,
    data: { task: sentTask }
  });
}