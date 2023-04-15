class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: items
    end

    def show
        item = find_item
        render json: item
    end

    private

    def find_item
        Item.find(params[:id])
    end
end
