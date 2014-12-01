class AddLikesToInsta < ActiveRecord::Migration
  def change
  	add_column :insta, :likes, :integer
  end
end
