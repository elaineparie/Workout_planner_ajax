class RemovePasswordFromMembers < ActiveRecord::Migration[5.2]
  def change
    remove_column :members, :password, :string
  end
end
