class Routine < ApplicationRecord
  belongs_to :member
  has_many :routine_exercises
  has_many :exercises, :through => :routine_exercises
  accepts_nested_attributes_for :exercises
end
