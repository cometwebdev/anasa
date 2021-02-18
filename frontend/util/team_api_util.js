// export const login = user => (
//   $.ajax({
//     method: 'POST',
//     url: `/api/session`,
//     data: { user }
//   })
// );



export const getTeams = () => {

  return $.ajax({
    method: 'GET',
    url: `/api/teams`,
  })
}

export const getTeam = (teamId) => {

  return $.ajax({
    method: 'GET',
    url: `/api/teams/${teamId}`
  })
}

export const createTeam = (team)  => {

  return $.ajax({
    method: 'POST',
    url: `/api/teams`,
    data: { team }
  });
};


export const updateTeam = (team)  => {

  return $.ajax({
    method: 'PATCH',
    url: `/api/teams/${team.id}`,
    data: { team }
  });
};