class ChargesController < ApplicationController
	def new
	end

	def create

	if params[:three] == 'true'
		customer = Stripe::Customer.create(
		    :email => 'hello@sockandbox.com',
		    :card  => params[:stripeToken]
		  )

		  charge = Stripe::Charge.create(
		    :customer    => customer.id,
		    :amount      => 6900,
		    :description => '6 pairs',
		    :currency    => 'cad'
		  )
	elsif params[:two] == 'true'
		customer = Stripe::Customer.create(
		    :email => 'hello@sockandbox.com',
		    :card  => params[:stripeToken]
		  )

		  charge = Stripe::Charge.create(
		    :customer    => customer.id,
		    :amount      => 4000,
		    :description => '3 pairs',
		    :currency    => 'cad'
		  )
	elsif params[:one] == 'true'	
		customer = Stripe::Customer.create(
		    :email => 'hello@sockandbox.com',
		    :card  => params[:stripeToken]
		  )

		  charge = Stripe::Charge.create(
		    :customer    => customer.id,
		    :amount      => 1500,
		    :description => '1 pair',
		    :currency    => 'cad'
		  )
	else	
	  customer = Stripe::Customer.create(
	    :email => params[:stripeEmail],
	    :card  => params[:stripeToken],
	    :plan => 'SOCKS2'
	  )
	end

	  purchase = Purchase.create(email: params[:stripeEmail], card: params[:stripeToken], 
	    amount: params[:amount], description: 'You get one pair of cool socks a month!', currency: 'cad',
	    customer_id: customer.id, amount: 1499, product_id: 1, uuid: SecureRandom.uuid, 
	    billing_address_apt: params[:billingApt], billing_address_city: params[:billingCity],
	    billing_address_country: params[:billingCountry], billing_address_country_code: params[:billingCountryCode],
	    billing_address_line1: params[:illingAddress1], billing_address_state: params[:billingState],
	    billing_address_zip: params[:billingZip], billing_name: params[:billingName], 

	    shipping_address_apt: params[:shippingApt], shipping_address_city: params[:shippingCity],
	    ashipping_address_country: params[:shippingCountry], shipping_address_country_code: params[:shippingCountryCode],
	    shipping_address_line1: params[:shippingAddress1], shipping_address_state: params[:shippingState],
	    shipping_address_zip: params[:shippingZip], shipping_name: params[:shippingName], referral: params[:referral], 
	    one: params[:one], two: params[:two], three: params[:three]
    )
	
	
    redirect_to root_path

	rescue Stripe::CardError => e
	  flash[:error] = e.message
	  redirect_to charges_path
	end
end
