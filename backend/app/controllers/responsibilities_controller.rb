class ResponsibilitiesController < ApplicationController
  require 'pry'
  
  def index
    responsibilities = Responsibility.all 
    render json: responsibilities 
  end

 
end
