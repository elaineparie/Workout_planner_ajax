class Member < ApplicationRecord
  has_secure_password
  has_many :routines
  validates :name, presence: true
  validates(:password, { :length => { :minimum => 8 } })
  validates :email, uniqueness: true

  def self.most_routines
  Member.order("routines_count")
  end

end
