class RemoveMemberIdFromWorkouts < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :member_id, :integer
  end
end
