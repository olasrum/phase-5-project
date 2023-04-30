class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :order_number, :cart_items_attributes, :first_name, :last_name, :address, :city, :state, :postcode

  belongs_to :user
  has_many :cart_items
end
