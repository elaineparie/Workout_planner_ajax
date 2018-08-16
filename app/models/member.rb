class Member < ApplicationRecord
  has_many :workouts
  has_many :exercises, :through => :workouts
end
