class Routine < ApplicationRecord
  has_many :workouts
  has_many :exercises
  has_many :members, through: :workouts
end
