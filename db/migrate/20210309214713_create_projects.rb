class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|

      t.integer :team_id, null: false
      t.integer :owner_id, null: false
      
      t.string :name, null: false
      t.string :status
      t.string :color
      t.string :icon

      t.datetime :due_date
      t.timestamps
    end
    add_index :projects, [:team_id, :name], unique: true
    add_index :projects, :owner_id
  end
end
