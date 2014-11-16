class ChargesController < ApplicationController
	def new
	end

	def create
	  customer = Stripe::Customer.create(
	    :email => params[:stripeEmail],
	    :card  => params[:stripeToken],
	    :plan => 'SOCKS'
	  )

	  purchase = Purchase.create(email: params[:stripeEmail], card: params[:stripeToken], 
    amount: params[:amount], description: 'You get one pair of cool socks a month!', currency: 'cad',
    customer_id: customer.id, amount: 999, product_id: 1, uuid: SecureRandom.uuid, 
    address: params[:address], city: params[:city], postal: params[:postal], country: params[:country])

    redirect_to root_path, :notice => 'Look for your receipt in your e-mail. Thanks buddy!'

	rescue Stripe::CardError => e
	  flash[:error] = e.message
	  redirect_to charges_path
	end
end
