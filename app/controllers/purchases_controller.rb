class PurchasesController < ApplicationController
	def show
    @purchase = Purchase.find(11)
    @email = Email.new
  end
end
