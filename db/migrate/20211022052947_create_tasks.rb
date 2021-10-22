class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|

      t.integer :assignee_id
      t.integer :taskable_id, null: false
      

      t.string :name, null: false
      t.string :taskable_type, null: false
      t.string :description
      t.string :priority

      t.date :due_date
      t.timestamps
    end
    add_index :tasks, [:taskable_id, :taskable_type, :name], unique: true
    add_index :tasks, :assignee_id
  end
end
