class AddUidToMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :members, :uid, :integer
  end
end
