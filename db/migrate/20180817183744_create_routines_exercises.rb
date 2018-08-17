class CreateRoutinesExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :routines_exercises do |t|
      t.integer :routine_id
      t.integer :exercise_id
    end
  end
end
