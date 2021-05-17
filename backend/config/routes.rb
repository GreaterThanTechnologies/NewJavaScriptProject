Rails.application.routes.draw do

  # the routes set up with the resources all 7 restful routes:
  # index, new, create, show, edit, update & destroy (patch)
  resources :tasks
  resources :partners

  # these customized routes set forth the route for the specific resources. 
  # with the slug that is required, and what method in what controller'
  # will handle the request. [route] => ['controller#method']
  get '/tasks/:id' => 'tasks#show'
  get '/partners/:partner_id/tasks' => 'tasks#index'

end
