class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true

    has_many :cart_items
    has_many :reviews
    has_many :orders

end
