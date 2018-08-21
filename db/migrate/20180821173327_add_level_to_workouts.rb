class AddLevelToWorkouts < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :level, :string
  end
end
