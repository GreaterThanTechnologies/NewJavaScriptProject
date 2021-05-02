class PartnerSerializer
  attributes :id, :fname, :lname, :title, :level
  has_many :tasks
end