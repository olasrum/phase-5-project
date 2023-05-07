class OrdersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    orders = Order.last
    render json: orders
  end

  def show 
    order = find_order
    render json: order
  end

  def create
    order_number = generate_order_number
    order_params = params.require(:order).permit(
      :user_id,
      :first_name,
      :last_name,
      :address,
      :city,
      :state,
      :postcode,
      :cart_items_attributes => [:user_id, :item_id, :quantity]
    )
    order = Order.create!(order_params.merge(order_number: order_number))
    
    # Update cart items with order_id
    order.cart_items.update_all(order_id: order.id)

    render json: order, status: :created
  end

  private

  def find_order
    Order.find(params[:id])
  end
    
  def generate_order_number
    loop do
      order_number = rand(1_000_000_000..2_000_000_000)
      return order_number unless Order.exists?(order_number: order_number)
    end
  end
    

  def render_unprocessable_entity_response(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  
end
