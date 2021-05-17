class PartnersController < ApplicationController

  # renders all the partners at localhost:3000/partners in respect 
  # to the serializer set up at backend/app/serializers/partner_serializer.rb
  # This method is called immediately upon running the application in the
  # index.js file. This is responsible for the fetch response for all partners
  def index
    render json: Partner.all 
  end

  # renders the specific partner ar localhost:3000/partners/:id in respect
  # tto the serializer set up at backend/app/serializers/partner_serializer.rb
  # This method is called immediately upon running the application in the
  # index.js file. This is responsible for the fetch response for an 
  # individual partner fetch request
  def show
    partner = Partner.find_by(id: params[:id])
    render json: partner
  end

  # this method is called when the delete button is selected within the table
  # of partners at index.html. Finds the partner by ID and if found, destroys
  # the partner and all it's tasks associated with that partner. 
  def destroy
    partner = Partner.find_by(id: params[:id])
    partner.destroy
    render json: {message: "successfully deleted partner!"}
  end

  # private methods, declared by using this private declaration below, means that
  # the method can only be called from within this class and is not
  # accessable outside of the class it is included in. In this case it is 
  # the PartnersController class
  private

  # this method is responsible for the strong params. This is stating that
  # when a form is submitted, it is stating that the partner properties are
  # required, but then also to ONLY allow (permit) the properties following
  # i.e. fname, lname, title, level & id
  def partner_params
    params.require(:partner).permit(:fname, :lname, :title, :level, :id)
  end
  
end
