class ReferalMailer < ActionMailer::Base
layout 'referal_mailer'
attachments.inline['mealnut.png'] = File.read( Rails.root.join("app/some/path/","mealnut.png") )


 default from: "dhurls99@gmail.com"

 def please_buy(email)
	 mail to: email, subject: "Thanks for your purchase!"
 end

end