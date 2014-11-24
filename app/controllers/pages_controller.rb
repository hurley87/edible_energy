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
  	@photos = grab_photos_from(@users)
  end

  def grab_photos_from(users)
  	photos = []
  	users.each do |user|
  		user_photos = find_right_photos(user.insta_id)
  		user_photos.each do |p|
  			photos << p
  		end
  	end
  	photos.uniq!
  end

  def find_right_photos(id)
  	instagram = Instagram.user_recent_media(id)
  	@photos = []
  	instagram.each do |i|
  		@photos << i if i[:tags].include?('pug')
  	end
  	@photos
  end

  def rank_the(photos)
  	hash = {}
  	photos.each do |photo|
  		hash[photo] = photo[:likes][:count]
  	end
  	ranked_hash = hash.sort_by {|_key, value| value}

  	ranked_photos = []
  	ranked_hash.each do |i|
  		ranked_photos << i[0]
  	end
  	ranked_hash
  end
end
