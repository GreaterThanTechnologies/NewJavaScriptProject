Rails.application.routes.draw do
  resources :responsibilities
  resources :partners
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get '/partners' => 'partners#index'
  # get '/responsibities' => 'responsibilities#index'
  # post '/create' => 'responsibilities#create'
  # post 'sessions', to: 'sessions#create'
  # delete 'sessions', to: 'sessions#destroy'
  # post 'sessions/token', to: 'sessions#identify'
  # get '/responsibilities' => 'responsibilities#index'

end
