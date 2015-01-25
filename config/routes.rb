Rails.application.routes.draw do
 

resources :user_sessions
resources :users

get 'login' => 'user_sessions#new', :as => :login
post 'logout' => 'user_sessions#destroy', :as => :logout

  get 'instas/new'

  get 'auth0/callback'
  get 'auth0/failure'
  get "/auth/auth0/callback" => "auth0#callback"
  get "/auth/failure" => "auth0#failure"

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  root 'pages#home'
  get 'terms' => 'pages#terms'
  get 'gift' => 'pages#gift'
  get 'privacy' => 'pages#privacy'
  get 'instagram' => 'pages#instagram'
  get 'faq' => 'pages#faq'
  get 'boxers' => 'pages#boxers'
  get 'blog' => 'pages#blog'
  
  resources :charges
  resources :purchases, only: [:show]
  resources :emails
end
