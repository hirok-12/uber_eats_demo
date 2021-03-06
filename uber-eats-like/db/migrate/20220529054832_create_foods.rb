class CreateFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :foods do |t|
      t.references :restaurant, null: false, foreign_key: true
      t.string :name, null: false, comment: "商品名"
      t.integer :price, null: false, comment: "商品価格"
      t.text :description, null: false, comment: "商品の説明文章"

      t.timestamps
    end
  end
end
