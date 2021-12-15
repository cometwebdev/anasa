// export const getTeams = () => {

//   return $.ajax({
//     method: 'GET',
//     url: `/api/teams`,
//   })
// }

// export const getTeam = (teamId) => {

//   return $.ajax({
//     method: 'GET',
//     url: `/api/teams/${teamId}`
//   })
// }

export const createProjectTask = (task)  => {
  Object.assign(task, {taskable_type: "Project"})
  return $.ajax({
    method: 'POST',
    url: `/api/tasks`,
    data: { task }
  });
};


export const updateProjectTask = (task)  => {
  Object.assign(task, {taskable_type: "Project"})

  return $.ajax({
    method: 'PATCH',
    url: `/api/tasks/${task.id}`,
    data: { task }
  });
};

export const deleteProjectTask = (taskId) => {

  
  return $.ajax({
    method: 'DELETE',
    url: `/api/tasks/${taskId}`
  });
}