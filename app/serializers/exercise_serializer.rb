class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :kind, :sets, :reps, :lbs, :member_id
  has_many :routines
end
