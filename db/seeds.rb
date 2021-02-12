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