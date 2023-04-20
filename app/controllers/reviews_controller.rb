class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = find_review
        render json: review
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end


    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:comment, :rating, :user_id, :item_id)
    end
end
