class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :name, :kind
  belongs_to :member
end
