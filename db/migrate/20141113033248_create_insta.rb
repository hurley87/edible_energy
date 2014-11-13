class CreateInsta < ActiveRecord::Migration
  def change
    create_table :insta do |t|
      t.string :insta_id
      t.string :nickname

      t.timestamps
    end
  end
end
