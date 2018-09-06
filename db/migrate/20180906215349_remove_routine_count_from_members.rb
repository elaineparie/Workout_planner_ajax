class RemoveRoutineCountFromMembers < ActiveRecord::Migration[5.2]
  def change
    remove_column :members, :routine_count, :integer
  end
end
