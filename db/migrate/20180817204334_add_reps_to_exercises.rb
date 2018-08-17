class AddRepsToExercises < ActiveRecord::Migration[5.2]
  def change
    add_column :exercises, :reps, :integer
  end
end
