class CreateProjectTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :project_teams do |t|

      t.integer :project_id, null: false
      t.integer :team_id, null: false

      t.boolean :edit_permission, null: false

      t.timestamps
    end
    add_index :project_teams, [:project_id, :team_id], unique: true
  end
end
