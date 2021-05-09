class PartnersController < ApplicationController

  def index
    render json: Partner.all, key_transform: :camel_lower
  end

  def show
    partner = Partner.find_by(id: params[:id])
    render json: partner
  end

  def create

    partner = Partner.new(partner_params)
   
    partner.email = params[:partner][:email].downcase
    
    partner.partnername = params[:partner][:email].upcase.split("@")[0]
    
    if partner.save
      # session[:partner_id] = partner.id
      render json: partner
    else
      render json: {message: "Sign up failed..."}
    end
  end

  def update
    partner = Partner.find_by(id: params[:id])
    # unsure of what is next here, I forget. Have to revist trainings
  end

  def destroy
    partner = Partner.find_by(id: params[:id])
    partner.destroy
    render json:{message: "successfully deleted partner!"}
  end

  private
  
  def partner_params
    params.require(:partner).permit(:fname, :lname, :title, :level, :id)
  end
  
end
