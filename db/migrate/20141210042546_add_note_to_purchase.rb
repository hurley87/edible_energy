class AddNoteToPurchase < ActiveRecord::Migration
  def change
  	add_column :purchases, :note, :string
  	add_column :purchases, :one, :boolean
  	add_column :purchases, :three, :boolean
  end
end
