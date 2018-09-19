class Exercise < ApplicationRecord
  has_many :workouts
  belongs_to :member
  has_many :routines, through: :workouts
  validates :name, presence: true
end
