class AddTargetToEmails < ActiveRecord::Migration
  def change
  	add_column :emails, :target, :string
  end
end
