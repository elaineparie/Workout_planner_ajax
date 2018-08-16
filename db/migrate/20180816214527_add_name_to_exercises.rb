class AddNameToExercises < ActiveRecord::Migration[5.2]
  def change
    add_column :exercises, :name, :string
  end
end
