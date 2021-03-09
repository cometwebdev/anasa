export const getProjects = () => {

  return $.ajax({
    method: 'GET',
    url: `/api/projects`,
  })
}

export const getProject = (projectId) => {

  return $.ajax({
    method: 'GET',
    url: `/api/projects/${projectId}`,
  })
}

export const createProject = (project) => {

  return $.ajax({
    method: 'POST',
    url: `/api/projects/`,
    data: { project }
  })
}

export const updateProject = (project) => {

  return $.ajax({
    method: 'PATCH',
    url: `/api/projects/${project.id}`,
    data: { project }
  })
}