class EmailsController < ApplicationController
  def create
  	@email = Email.new(email_params)

  	if @email.save
      redirect_to(:back)
  	else
  		redirect_to(:back)
  	end
  end

  def email_params
  	params.require(:email).permit(:subject, :body, :target)
  end
end
