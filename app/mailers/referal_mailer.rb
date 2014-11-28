class ReferalMailer < ActionMailer::Base
layout 'referal_mailer'
# attachments.inline['happysocks2.png'] = File.read( Rails.root.join("app/assets/images/","happysocks2.png") )


 default from: "dhurls99@gmail.com"

 def please_buy(email)
	 mail to: email, subject: "Thanks for your purchase!"
 end

end