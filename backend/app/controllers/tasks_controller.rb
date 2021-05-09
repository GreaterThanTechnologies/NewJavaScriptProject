class TasksController < ApplicationController
   
  def index
    render json: Task.all
  end

  def show
    task = Task.find_by(id: params[:id])
     render json: task.to_json
  end

  def create
    binding.pry
    task = Task.create(task_params)
      render json: task
  end



  # def update
  #   Task = Task.find_by(id: params[:id])
  #   # unsure of what is next here, I forget. Have to revist trainings
  # end
  
  # def delete
  #   Task = Task.find_by(id: params[:id])
  #   Task.destroy
  # end

  private

  def task_params
    params.require(:task).permit(:todo, :partner_id)
  end
end
 