class RemoveMemberIdFromRoutines < ActiveRecord::Migration[5.2]
  def change
    remove_column :routines, :member_id, :integer
  end
end
