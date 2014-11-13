class Auth0Controller < ApplicationController
  def callback   
    session[:userinfo] = request.env['omniauth.auth']
    name = session[:userinfo][:extra][:raw_info][:nickname]
    insta_id = session[:userinfo][:extra][:raw_info][:identities][0]['user_id']
    Insta.create(nickname: name, insta_id: insta_id)

    redirect_to instagram_path
  end

  def failure
    @error_msg = request.params['message']
  end
end