class AddReferralToPurchases < ActiveRecord::Migration
  def change
  	add_column :purchases, :referral, :string
  end
end
