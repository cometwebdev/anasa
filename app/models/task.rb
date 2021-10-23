class Task < ApplicationRecord
  validates :taskable_id, :name, :taskable_type, presence: true
  validates :taskable_id, uniqueness: { scope: [:taskable_type, :name]}
  
  belongs_to :assignee,
    primary_key: :id,
    foreign_key: :assignee_id,
    class_name: :User,
    optional: true
end

