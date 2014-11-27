class PagesController < ApplicationController
  def home
  	@stripe_key = Rails.configuration.stripe[:publishable_key]
  	
  end

  def privacy
  end

  def terms
  end

  def faq
  end

  def instagram
  	@users = Insta.all
  end

 
end
