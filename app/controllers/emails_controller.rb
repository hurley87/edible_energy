class EmailsController < ApplicationController
  def create
  	@email = Email.new(email_params)
  	@purchase = Purchase.find_by_uuid(params[:id])

  	if @email.save
      redirect_to instas_new_path
  	else
  		redirect_to @purchase
  	end
  end

  def email_params
  	params.require(:email).permit(:subject, :body, :target)
  end
end
