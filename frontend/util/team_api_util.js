// export const login = user => (
//   $.ajax({
//     method: 'POST',
//     url: `/api/session`,
//     data: { user }
//   })
// );

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