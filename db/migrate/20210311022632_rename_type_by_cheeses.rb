class RenameTypeByCheeses < ActiveRecord::Migration[6.1]
  def change
    rename_column :cheeses, :type, :origin
    add_column :cheeses, :name, :string
  end
end
