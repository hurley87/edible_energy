class AddImageToInstas < ActiveRecord::Migration
  def change
  	add_column :insta, :image, :string
  end
end
