json.extract! @task, :id, :name, :assignee_id

if @task.taskable_type == 'Project'
  json.prj_id @task.taskable_id
else
  json.user_id @task.taskable_id
end
