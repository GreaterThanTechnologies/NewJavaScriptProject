class SessionsController < ApplicationController
  
  # this method is responsible for creating a new partner. I did not get to 
  # finalize this feature within the application, thus it is unused. 
  def create
    partner = Partner.find_by(email: params[:partner][:email])
    if partner && partner.authenticate(params[:partner][:password])
      session[:partner_id] = partner.id
      render json: partner
    else
      render json: {message: "Log in failed..."}
    end
  end

  # this method, much like the above create method, was intended to be used
  # when a partner was to logout. Because this is not a function of the 
  # application, this method is also unused
  def destroy
    session.clear
    render json: {message: "Successfully logged out."}
  end

