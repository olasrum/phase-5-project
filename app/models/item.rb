class Item < ApplicationRecord
    has_many :cart_items
    has_many :reviews

end
