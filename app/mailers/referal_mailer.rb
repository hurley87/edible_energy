class ReferalMailer < ActionMailer::Base
layout 'referal_mailer'


 default from: "dhurls99@gmail.com"

 def please_buy(email)
 	 attachments.inline['happysocks2.png'] = File.read('app/assets/images/happysocks2.png')
 	 attachments.inline['happysocks3.png'] = File.read('app/assets/images/happysocks3.png')
 	 attachments.inline['happysocks4.png'] = File.read('app/assets/images/happysocks4.png')
 	 attachments.inline['happysocks5.png'] = File.read('app/assets/images/happysocks5.png')
 	 attachments.inline['photocool.png'] = File.read('app/assets/images/photocool.png')

 
	 mail to: email, subject: "Thanks for your purchase!"
 end

end