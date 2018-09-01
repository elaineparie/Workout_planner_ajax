class DropExerciseRoutinesTable < ActiveRecord::Migration[5.2]

    def up
  drop_table :routine_exercises
end


end
