class AddLbsToExercises < ActiveRecord::Migration[5.2]
  def change
    add_column :exercises, :lbs, :integer
  end
end
