class Member < ApplicationRecord
  has_many :workouts
  has_many :routines, :through => :workouts
end
