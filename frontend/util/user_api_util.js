export const getUser = (userId) => {
  
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`,
  })
}

export const getUser = (user) => {
  
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user }
  })
}

