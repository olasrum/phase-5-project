class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :image
      t.integer :price
      t.integer :amount

      t.timestamps
    end
  end
end
