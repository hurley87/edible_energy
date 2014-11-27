class Email < ActiveRecord::Base
	# validates :target, presence: true
	


	after_create :email_purchaser

	private

	def email_purchaser
	   ReferalMailer.please_buy(self).deliver
	end

end
