Rails.application.routes.draw do
  resources :tasks
  resources :partners

  get '/tasks/:id' => 'tasks#show'
  post '/tasks/:id' => 'tasks#create'

end
