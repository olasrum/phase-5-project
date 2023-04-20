class CartItemsController < ApplicationController

    def index
        cart_items = CartItem.all
        render json: cart_items
    end

    def show
        cart_item = find_cart_item
        render json: cart_item
    end

    def create
        cart_item = Review.create!(cart_item_params)
        render json: cart_item, status: :created
    end

    def update
        cart_item = find_cart_item
        cart_item.update!(cart_item_params)
        render json: cart_item, status: :accepted
    end

    def destroy
        cart_item = find_cart_item
        cart_item.destroy
        head :no_content
    end

    private

    def find_cart_item
        CartItem.find(params[:id])
    end

    def cart_item_params
        params.permit(:user_id, :item_id, :quantity)
    end
end
