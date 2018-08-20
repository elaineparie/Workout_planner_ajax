class Routine < ApplicationRecord
  has_many :workouts
  has_many :routines, through: :workouts
  has_many :routine_exercises
  has_many :exercises, :through => :routine_exercises
  accepts_nested_attributes_for :exercises
  validates :name, presence: true
  validates :kind, presence: true
end
