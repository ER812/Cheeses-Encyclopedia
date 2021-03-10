class CreateCheeses < ActiveRecord::Migration[6.1]
  def change
    create_table :cheeses do |t|
      t.string :region
      t.string :type
      t.string :source
      t.string :description
      t.string :culinary_uses

      t.timestamps
    end
  end
end
