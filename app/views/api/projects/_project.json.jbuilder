json.project @project, :id, :name, :owner_id, :team_id, :color, :icon, :status

json.tasks @project.tasks do |task|
  json.set! task.id do
    json.extract! task, :id, :name
  end
end