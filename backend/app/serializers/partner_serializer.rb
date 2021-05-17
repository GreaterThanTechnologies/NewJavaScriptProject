class PartnerSerializer < ActiveModel::Serializer 

   # the serializers set the attributes that are allowed to be shown when 
   # called upon by the methods index and show. The fact that the 
   # has_many tasks is "called" sets the association to the partner so that they
   # display together and are nested
   attributes  :fname, :lname, :title, :level, :id 
   has_many :tasks
end
