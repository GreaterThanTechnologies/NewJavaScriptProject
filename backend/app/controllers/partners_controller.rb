class PartnersController < ApplicationController

  def index
    render json: Partner.all 
  end

  def show
    partner = Partner.find_by(id: params[:id])
    render json: partner
  end

  def destroy
    partner = Partner.find_by(id: params[:id])
    partner.destroy
    render json: {message: "successfully deleted partner!"}
  end

  private
  
  def partner_params
    params.require(:partner).permit(:fname, :lname, :title, :level, :id)
  end
  
end
