class ResponsibilitiesController < ApplicationController
   
  def index
    responsibilities = Responsibility.all 
    render json: responsibilities 
  end

  def show
    responsibility = Responsibility.find_by(id: params[:id])
    render json: responsibility
  end

  def create
    responsibility = Responsibility.create(responsibility_params)
    render json: responsibility
  end

  def update
    responsibility = Responsibility.find_by(id: params[:id])
    # unsure of what is next here, I forget. Have to revist trainings
  end
  
  def delete
    responsibility = Responsibility.find_by(id: params[:id])
    responsibility.destroy
  end

  private

  def responsibility_params
    params.require(:responsibility).permit(:task, :id, 
    partner_attributes: [:fname, :lname, :title, :level])
end
end
