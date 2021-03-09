class Team < ApplicationRecord
  validates :name, null: false

  has_many :user_teams,
    primary_key: :id,
    foreign_key: :team_id,
    class_name: :UserTeam
  
  has_many :members,
    through: :user_teams,
    source: :user

  has_many :projects
end
