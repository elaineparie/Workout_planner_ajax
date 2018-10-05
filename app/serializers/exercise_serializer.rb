class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :kind, :sets, :reps, :lbs, :member_id
  belongs_to :routine 
end
