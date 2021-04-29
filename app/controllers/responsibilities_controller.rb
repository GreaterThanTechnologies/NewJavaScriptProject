class ResponsibilitiesController < ApplicationController

  def index
    responsibilities = Responsibility.All 
    render json: responsibilities, include: [:task]
  end
end
