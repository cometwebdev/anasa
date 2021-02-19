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
    email: "awesome@possums.com",
    password: "Possums-Are-Awesome"
  }
]);

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
]);