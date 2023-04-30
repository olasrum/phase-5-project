class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :order_number
      t.jsonb :cart_items_attributes, default: [], null: false
      t.string :first_name
      t.string :last_name
      t.string :address
      t.string :city
      t.string :state
      t.integer :postcode

      t.timestamps
    end
  end
end
