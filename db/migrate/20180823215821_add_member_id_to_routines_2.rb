class AddMemberIdToRoutines2 < ActiveRecord::Migration[5.2]
  def change
    add_column :routines, :member_id, :integer
  end
end
