class AddTwoToPurchases < ActiveRecord::Migration
  def change
  	add_column :purchases, :two, :boolean
  end
end
