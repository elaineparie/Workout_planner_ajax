class Workout < ApplicationRecord
  belongs_to :member
  belongs_to :exercise
end
