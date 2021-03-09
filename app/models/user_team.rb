class UserTeam < ApplicationRecord
  validates :user_id, :team_id, presence: true
  
  belongs_to :user
  belongs_to :team
end
