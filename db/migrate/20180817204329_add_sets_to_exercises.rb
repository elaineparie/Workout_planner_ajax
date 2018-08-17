class AddSetsToExercises < ActiveRecord::Migration[5.2]
  def change
    add_column :exercises, :sets, :integer
  end
end
