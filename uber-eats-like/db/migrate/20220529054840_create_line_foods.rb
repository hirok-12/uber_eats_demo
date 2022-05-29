class CreateLineFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :line_foods do |t|
      t.references :food, null: false, foreign_key: true
      t.references :restaurant, null: false, foreign_key: true
      t.references :order, foreign_key: true
      t.integer :count, null: false, default: 0, comment: "商品の個数"
      t.boolean :active, null: false, default: false, comment: "active/not activeの状態"

      t.timestamps
    end
  end
end
