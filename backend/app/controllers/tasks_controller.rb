class TasksController < ApplicationController
   
  # this method is used to display all the tasks associated with all the
  # partners. This is displayed in accordance with the serializer set up 
  # in the file located at backend/app/serializers/task_serializer.rb
  # the display URL would be localhost:3000/tasks
  def index
    partner = Partner.find_by(id: params[:partner_id])
    render json: partner.tasks
  end

  # this method is called upon to display the tasks of an individual partner
  # This is displayed in accordance with the serializer set up in the file
  # located in the file at backend/app/controllers/tasks_controller.rb and
  # would be displayed at the URL loaclhost:3000/tasks/:id
  def show
    task = Task.find_by(id: params[:id])
    render json: task.to_json
  end

  # this method is used when a new task is created using the form displayed 
  # on the landing page index.html. 
  def create
    task = Task.create(task_params)
    render json: task
  end

  # this method was intended to be used when deleting a specific task assigned
  # to a partner from within the modal. I did not get to finish this feature
  # and thus this method is left unused.
  def destroy 
    task = Task.find_by(id: params[:id])
  end
       
  # private methods, declared by using this private declaration below, means that
  # the method can only be called from within this class and is not
  # accessable outside of the class it is included in. In this case it is 
  # the PartnersController class
  private

  # strong params, which is what this is, is set up to require certain items, in this
  # instance, the creation of a task is requiring the task db and to only allow, or
  # "permit" the existance of the todo and the partner_id properties to be
  # passed. all others would be ignored if attempted to be added
  def task_params
    params.require(:task).permit(:todo, :partner_id)
  end
end
 