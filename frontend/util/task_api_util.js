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

export const createTask = (task)  => {

  return $.ajax({
    method: 'POST',
    url: `/api/tasks`,
    data: { task }
  });
};


export const updateTask = (task)  => {

  return $.ajax({
    method: 'PATCH',
    url: `/api/tasks/${task.id}`,
    data: { task }
  });
};

export const deleteTask = (taskId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/tasks/${taskId}`
  });
}