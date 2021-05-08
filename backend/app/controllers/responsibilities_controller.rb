class ResponsibilitiesController < ApplicationController
   
  def index
    responsibilities = Responsibility.all 
    render json: Responsibility.all
    # , include: [partners: {only: [:fname]}], except: [:created_at, :updated_at]
  end

  # def partners
  #   @partners = Partner.all
  # end

  def show
    responsibility = Responsibility.find_by(id: params[:id])
    render json: responsibility.to_json
  end

  def create
    responsibility = Responsibility.new(responsibility_params)
    if responsibility.save
      render json: responsibility
    else 
      render json: {message: responsibility.errors.full_messages}
    end
  end

  # def update
  #   responsibility = Responsibility.find_by(id: params[:id])
  #   # unsure of what is next here, I forget. Have to revist trainings
  # end
  
  # def delete
  #   responsibility = Responsibility.find_by(id: params[:id])
  #   responsibility.destroy
  # end

  private

  def responsibility_params
    params.require(:responsibility).permit(:task, :id, 
    partner_attributes: [:fname, :lname, :title, :level])
end
end
