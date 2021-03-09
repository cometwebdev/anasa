projects.each do |project|
  json.set! project.id do 
    json.extract! project, :id, :name #, :owner_id, :team_id, :color, :icon, :status
  end
end