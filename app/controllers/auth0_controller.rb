class Auth0Controller < ApplicationController
  def callback   
    session[:userinfo] = request.env['omniauth.auth']
    name = session[:userinfo][:extra][:raw_info][:nickname]
    insta_id = session[:userinfo][:extra][:raw_info][:identities][0]['user_id']

    @photos = find_right_photos(insta_id)


    # photos.each do |photo|
    #   Insta.create(nickname: name)
    # end
    
    redirect_to instagram_path
  end

  def failure
    @error_msg = request.params['message']
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