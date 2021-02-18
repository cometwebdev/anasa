teams.each do |team|
  json.set! team.id.to_s do
    json.extract! team, :id, :name
  end
end