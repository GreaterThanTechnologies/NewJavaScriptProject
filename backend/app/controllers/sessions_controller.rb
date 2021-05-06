class SessionsController < ApplicationController
  
  def create
    partner = Partner.find_by(email: params[:partner][:email])
    if partner && partner.authenticate(params[:partner][:password])
      session[:partner_id] = partner.id
      render json: partner
    else
      render json: {message: "Log in failed..."}
    end
  end

  def destroy
    session.clear
    render json: {message: "Successfully logged out."}
  end

  def identify
    render json: Partner.find_by(password_digest: params[:token])
  end
end
