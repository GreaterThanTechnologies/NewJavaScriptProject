class TasksController < ApplicationController
   
  def index
    render json: Task.all
  end

  def show
    task = Task.find_by(id: params[:id])
    render json: task.to_json
  end

  def create
    task = Task.create(task_params)
    render json: task
  end

  def destroy
    task = Task.find_by(id: params[:id])
    
  end
       
  private

  def task_params
    params.require(:task).permit(:todo, :partner_id)
  end
end
 