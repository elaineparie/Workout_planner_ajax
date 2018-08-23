class AddExerciseIdToWorkouts < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :exercise_id, :integer
  end
end
