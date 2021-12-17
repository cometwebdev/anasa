json.extract! @task, :id, :name

if @task.taskable_type == 'Project'
  json.prj_id @task.taskable_id
end
