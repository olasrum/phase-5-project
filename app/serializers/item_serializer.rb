class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image, :description, :amount

  has_many :reviews
  has_many :cart_items
end
