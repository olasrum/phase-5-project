class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :item_id, :comment, :rating

  belongs_to :item
  belongs_to :user
end
