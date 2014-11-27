class ReferalMailer < ActionMailer::Base
layout 'referal_mailer'

 default from: "dhurls99@gmail.com"

 def please_buy(email)
	 mail to: email, subject: "Thanks for your purchase!"
 end

end