Rails.application.routes.draw do
  
  resources :users, only: [:show]
  resources :reviews, only: [:index, :show, :create]
  resources :items, only: [:index, :show]
  resources :cart_items
  post "signup", to: "users#create"
  get "/me", to: "users#show2"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
