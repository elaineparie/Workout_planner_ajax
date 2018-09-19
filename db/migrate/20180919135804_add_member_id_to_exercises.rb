class AddMemberIdToExercises < ActiveRecord::Migration[5.2]
  def change
    add_column :exercises, :member_id, :integer
  end
end
