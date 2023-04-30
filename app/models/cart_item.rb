class CartItem < ApplicationRecord
    belongs_to :user
    belongs_to :item
    belongs_to :order, optional: true

    validates :quantity, presence: true, numericality: {greater_than: 0}

end