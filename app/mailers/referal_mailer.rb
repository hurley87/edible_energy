class ReferalMailer < ActionMailer::Base
layout 'referal_mailer'
# attachments.inline['happysocks2.png'] = File.read( Rails.root.join("app/assets/images/","happysocks2.png") )


 default from: "dhurls99@gmail.com"

 def please_buy(email)
 	 attachments.inline['happysocks2.png'] = File.read('app/assets/images/happysocks2.png')
 	 attachments.inline['happysocks3.png'] = File.read('app/assets/images/happysocks3.png')
 	 attachments.inline['happysocks4.png'] = File.read('app/assets/images/happysocks4.png')
 	 attachments.inline['happysocks5.png'] = File.read('app/assets/images/happysocks5.png')
 	 attachments.inline['twitter.jpg'] = File.read('twitter.jpg')
 	 attachments.inline['insta.jpg'] = File.read('insta.jpg')
 	 attachments.inline['facebook.png'] = File.read('facebook.png')
 	 attachments.inline['photocool.jpg'] = File.read('photocool.jpg')
	 mail to: email, subject: "Thanks for your purchase!"
 end

end