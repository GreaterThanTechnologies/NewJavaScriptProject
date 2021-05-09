class PartnerSerializer < ActiveModel::Serializer 
   attributes  :fname, :lname, :title, :level, :id 
   has_many :tasks
end
