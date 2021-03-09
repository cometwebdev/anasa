class Project < ApplicationRecord
  validates :name, :owner_id, :team_id, presence: true
  validates :name, uniqueness: { scope: :team_id }
  # validates :status, inclusion: { in: [nil, "", "On Track", "At Risk", "Off Track", "On Hold"]}
  # add validations for color and icon
  
  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  belongs_to :team

end
