class TasksController < ApplicationController
   
  def index
    render json: Task.all
  end

  def show
    task = Task.find_by(id: params[:id])
     render json: task.to_json
  end

  def create

    task = Task.new(task_params)
     if Task.save
      
      render json: Task
    else 
      render json: {message: Task.errors.full_messages}
    end
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
    params.require(:Task).permit(:task, :partner_id, partner_attributes: [:id])
  end
end
 