class ReferalMailer < ActionMailer::Base
layout 'referal_mailer'

 default from: "SOCKS"

 def please_buy(email)
	 mail to: email, subject: "Thanks for your purchase!"
 end

end