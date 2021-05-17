class TaskSerializer < ActiveModel::Serializer 

   # the serializers set the attributes that are allowed to be shown when 
   # called upon by the methods index and show. The fact that the 
   # belongs_to partner is "called" sets the association to the task so that they
   # display together and are nested
   attributes :todo, :partner_id, :id
   belongs_to :partner
end
