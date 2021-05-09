class TaskSerializer < ActiveModel::Serializer 
   attributes :todo, :partner_id, :id
   belongs_to :partner
end
