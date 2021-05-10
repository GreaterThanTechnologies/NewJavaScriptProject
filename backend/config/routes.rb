Rails.application.routes.draw do
  resources :tasks
  resources :partners

  get '/tasks/:id' => 'tasks#show'
  get '/partners/:partner_id/tasks' => 'tasks#index'

end
