class RemoveExerciseIdFromWorkouts < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :exercise_id, :integer
  end
end
