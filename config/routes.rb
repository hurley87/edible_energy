Rails.application.routes.draw do
 
  get 'auth0/callback'
  get 'auth0/failure'
  get "/auth/auth0/callback" => "auth0#callback"
  get "/auth/failure" => "auth0#failure"

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  root 'pages#home'
  get 'terms' => 'pages#terms'
  get 'privacy' => 'pages#privacy'
  get 'instagram' => 'pages#instagram'
  get 'faq' => 'pages#faq'
  
  resources :charges
  resources :purchases, only: [:show]
end
