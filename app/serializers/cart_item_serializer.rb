class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :item_id, :quantity

  belongs_to :item
  belongs_to :user
end
