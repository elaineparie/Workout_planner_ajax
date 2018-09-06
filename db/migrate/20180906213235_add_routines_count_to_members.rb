class AddRoutinesCountToMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :members, :routines_count, :integer
  end
end
