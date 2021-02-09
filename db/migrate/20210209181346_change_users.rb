class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :full_name
    add_column :users, :full_name, :string
  end
end
