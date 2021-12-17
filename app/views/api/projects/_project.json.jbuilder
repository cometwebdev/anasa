json.project project, :id, :name, :owner_id, :team_id, :color, :icon, :status

json.set! "tasks" do 
  project.tasks.each do |task|
    json.set! task.id do
      json.extract! task, :id, :name
      json.prj_id project.id
    end
  end
end