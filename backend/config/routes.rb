Rails.application.routes.draw do
  resources :tasks
  resources :partners

  get '/tasks/:id' => 'tasks#show'
  delete '/tasks/:id' => 'tasks#create'
  

end
