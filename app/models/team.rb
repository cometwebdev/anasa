class Team < ApplicationRecord
  validates :name, null: false

  # add associations for members and projects
  
end
