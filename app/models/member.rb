class Member < ApplicationRecord
  has_secure_password
  has_many :routines
  validates :name, presence: true
  validates(:password, { :length => { :minimum => 8 } })
  validates :email, uniqueness: true

  def self.most_routines
  Member.order("routines_count")
  end

  def self.most_routines
    Member.all.sort_by{|member| member.routines.length}.reverse!
  end

end
