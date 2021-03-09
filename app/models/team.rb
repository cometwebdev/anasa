class Team < ApplicationRecord
  validates :name, null: false

  has_many :user_teams,
  
  
end
