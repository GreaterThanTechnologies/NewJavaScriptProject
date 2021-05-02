class PartnersController < ApplicationController

  def index
    partners = Partner.all 
    render json: partners 
  end

  def create
  end

  def update
  end

  def destroy
  end

  def partner_params
  end
  
end
