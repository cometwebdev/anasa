projects.each do |project|
  json.set! project.id do 
    json.extract! project, :id, :name, :team_id #, :team_id, :color, :icon, :status
  end
end