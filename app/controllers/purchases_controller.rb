class PurchasesController < ApplicationController
	def show
    @purchase = Purchase.find_by_uuid(params[:id])
    @email = Email.new
  end
end
