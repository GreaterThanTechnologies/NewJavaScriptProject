class PartnersController < ApplicationController

  def index
    partners = Partner.all 
    render json: partners 
  end

  def show
    partner = Partner.find_by(id: params[:id])
    render json: partner
  end

  def create
    partner = Partner.create(partner_params)
    render json: partner
  end

  def update
    partner = Partner.find_by(id: params[:id])
    # unsure of what is next here, I forget. Have to revist trainings
  end

  def delete
    partner = Partner.find_by(id:params[:id])
    partner.destroy
  end

  private
  
  def partner_params
    params.require(:partner).permit(:fname, :lname, :title, :level,
    responsibilities_attributes: [:task])
  end
  
end
