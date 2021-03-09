json.set! "team" do 
  json.extract! team, :id, :name, :description
  json.teammateIds team.members.map {|member| member.id}
end

json.set! "teammates" do
  team.members.each do |member|
    json.set! member.id do
      json.extract! member, :id, :email
    end
  end
end