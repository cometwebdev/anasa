json.user user, :id, :email, :about_me

json.set! "tasks" do 
  user.tasks.each do |task|
    json.set! task.id do
      json.extract! task, :id, :name
      if task.taskable_type == 'project'
        json.prj_id task.taskable_id
      else
        json.user_id task.taskable_id
      end
    end
  end
end

json.set! "projects" do 
  user.projects.each do |prj|
    json.set! prj.id do
      json.name prj.name
    end
  end
end