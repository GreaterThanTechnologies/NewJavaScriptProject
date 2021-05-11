class TasksController < ApplicationController
   
  def index
    partner = Partner.find_by(id: params[:partner_id])
    render json: partner.tasks
  end

  def show
    task = Task.find_by(id: params[:id])
    render json: task.to_json
  end

  def create
    task = Task.new(task_params)
   
      render json: task
   
    end
  end

  def destroy
     
    task = Task.find_by(id: params[:id])
    
  end
       
  private

  def task_params
    params.require(:task).permit(:todo, :partner_id)
  end
end
 