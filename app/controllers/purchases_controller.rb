class PurchasesController < ApplicationController
	def show
    @purchase = Purchase.find(params[:id])
    @email = Email.new
  end
end
