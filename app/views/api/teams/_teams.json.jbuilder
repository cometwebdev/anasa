json.set! "teams" do 
  teams.includes(:members).each do |team|
    json.set! team.id do
      json.extract! team, :id, :name
      json.teammateIds team.members.map {|member| member.id}
    end
  end
end


json.set! "teammates" do
  current_user.teammates.each do |teammate|
    json.set! teammate.id do 
      json.extract! teammate, :id, :email
    end
  end
end