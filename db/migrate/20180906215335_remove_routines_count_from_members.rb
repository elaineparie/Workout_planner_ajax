class RemoveRoutinesCountFromMembers < ActiveRecord::Migration[5.2]
  def change
    remove_column :members, :routines_count, :integer
  end
end
