class AddBillingAndShippingInfoToPurchases < ActiveRecord::Migration
  def change
  	add_column :purchases, :billing_address_apt, :string
  	add_column :purchases, :billing_address_city, :string
  	add_column :purchases, :billing_address_country, :string
  	add_column :purchases, :billing_address_country_code, :string
  	add_column :purchases, :billing_address_line1, :string
  	add_column :purchases, :billing_address_state, :string
  	add_column :purchases, :billing_address_zip, :string
  	add_column :purchases, :billing_name, :string
  	add_column :purchases, :shipping_address_apt, :string
  	add_column :purchases, :shipping_address_city, :string
  	add_column :purchases, :ashipping_address_country, :string
  	add_column :purchases, :shipping_address_country_code, :string
  	add_column :purchases, :shipping_address_line1, :string
  	add_column :purchases, :shipping_address_state, :string
  	add_column :purchases, :shipping_address_zip, :string
  	add_column :purchases, :shipping_name, :string
  end
end
