class AddRoutineCountToMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :members, :routine_count, :integer
  end
end
