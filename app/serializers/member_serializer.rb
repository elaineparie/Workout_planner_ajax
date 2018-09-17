class MemberSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :routines
end
