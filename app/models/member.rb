class Member < ApplicationRecord
  has_secure_password
  has_many :routines
end
