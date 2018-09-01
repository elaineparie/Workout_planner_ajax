class Routine < ApplicationRecord
  belongs_to :member
  has_many :workouts
  has_many :exercises, :through => :workouts
  accepts_nested_attributes_for :exercises
  accepts_nested_attributes_for :workouts
  validates :name, presence: true
  validates :kind, presence: true

  def self.upper_body_routines
    where(kind: 'upper body')
  end

  def self.lower_body_routines
    where(kind: 'lower body')
  end

  def self.cardio_routines
    where(kind: 'cardio')
  end

  def self.ab_routines
    where(kind: 'abs')
  end

  def self.full_body_routines
    where(kind: 'full body')
  end

end
