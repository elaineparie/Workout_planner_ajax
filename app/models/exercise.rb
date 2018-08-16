class Exercise < ApplicationRecord
  has_many :workouts
  has_many :members, :through => :workouts
end
