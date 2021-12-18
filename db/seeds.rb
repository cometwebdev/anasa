# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# clean up database when seeding -- 
#   avoids errors of trying to create users if the db has already been seeded
User.destroy_all
User.create([
  {
    email: "everything",
    password: "everything",
    about_me: "I am everything"
  },
  {
    email: "awesome@possums.com",
    password: "Possums-Are-Awesome",
    about_me: "Possums are great"
  },
  {
    email: "saucesome@possums.com",
    password: "Possums-Are-Awesome",
    about_me: "Relish is best sauce"
  },
  {
    email: "blossom@possums.com",
    password: "Possums-Are-Awesome",
    about_me: "Pokemon Forever"
  },
  {
    email: "wholesome@possums.com",
    password: "Possums-Are-Awesome",
    about_me: "I love to help, please talk to me!"
  },
  {
    email: "totalsum@possums.com",
    password: "Possums-Are-Awesome",
    about_me: "Algorithms get things done better"
  },
])

Team.destroy_all
Team.create([
  {
    name: "Team Rocket",
    description: "Prepare for trouble!\n
    And make it double!\n
    To protect the world from devastation!\n
    To unite all peoples within our nation!\n
    To denounce the evils of truth and love!\n
    To extend our reach to the stars above!\n
    Jessie!\n
    James!\n
    Team Rocket blasts off at the speed of light!\n
    Surrender now, or prepare to fight!\n
    \n
    Meowth!\n
    That's right!"
  },

  {
    name: "Teen Titans",
    description: "When there's trouble you know who to call\n
    Teen Titans!\n
    From their towers they can see it all\n
    Teen Titans!\n
    When there's evil on the attack\n
    You can rest knowing they've got your back\n
    'Cause when the world needs heroes on patrol\n
    Teen Titans, go!"
  },

  {
    name: "TBA",
    description: ""
  },
])

UserTeam.destroy_all

# for testing -- make first user connected to all teams

User.all.each do |user|
  UserTeam.create({user_id: user.id, team_id: Team.all.sample.id})
end


Project.destroy_all

User.all.includes(:teams).each do |user|
  Project.create(
    {
      owner_id: user.id,
      name: "#{user.email}'s first project",
      team_id: user.teams.first.id
    });
end

Task.destroy_all

tasks = [
  "Make Presentation",
  "Attend Meeting",
  "Write Report",
  "Follow Up With Client",
  "Analyze Data"
]

User.all.each do |user|
  user.projects.each do |project|
    Task.create(
      {
        assignee_id: user.id,
        name: tasks.sample,
        taskable_type: "Project",
        taskable_id: project.id
      }
    )
  end

  Task.create(
    {
      assignee_id: user.id,
      name: tasks.sample,
      taskable_type: "User",
      taskable_id: user.id
    }
  )
end