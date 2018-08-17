class RemoveTypeFromExercises < ActiveRecord::Migration[5.2]
  def change
    remove_column :exercises, :type, :string
  end
end
