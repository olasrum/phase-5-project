class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :item_id, :quantity, :order_id

  belongs_to :item
  belongs_to :user
end
