class Routine < ApplicationRecord
  has_many :workouts
  has_many :routines, through: :workouts
  has_many :routine_exercises
  has_many :exercises, :through => :routine_exercises
  accepts_nested_attributes_for :exercises
  accepts_nested_attributes_for :workouts
  validates :name, presence: true
  validates :kind, presence: true

  def self.upper_body_routines
    self.where(kind: 'upper body')
  end

  def self.lower_body_routines
    self.where(kind: 'lower body')
  end

  def self.cardio_routines
    self.where(kind: 'cardio')
  end

  def self.ab_routines
    self.where(kind: 'abs')
  end

  def self.full_body_routines
    self.where(kind: 'full body')
  end

end
