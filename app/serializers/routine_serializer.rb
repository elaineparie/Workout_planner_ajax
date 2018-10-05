class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :name, :kind
  belongs_to :member
  has_many :exercises
end
