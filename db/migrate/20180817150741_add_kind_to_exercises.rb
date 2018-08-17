class AddKindToExercises < ActiveRecord::Migration[5.2]
  def change
    add_column :exercises, :kind, :string
  end
end
