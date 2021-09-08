# this seems inefficient on database requests, there probably is a better way
#  to loop over and set things appropriately

json.set! "team" do 
  json.extract! team, :id, :name, :description
  json.teammateIds team.members.map {|member| member.id}
  json.projectIds team.projects.map {|project| project.id}
end

json.set! "teammates" do
  team.members.each do |member|
    json.set! member.id do
      json.extract! member, :id, :email
    end
  end
end


json.set! "projects" do
  team.projects.each do |project|
    json.set! project.id do
      json.extract! project, :id, :name
    end
  end
end