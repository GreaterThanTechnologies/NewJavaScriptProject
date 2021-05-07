class PartnerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :fname, :lname, :title, :level
  attribute :responibilities do |list|
    ResponsibiltySerializer.new(list.responsibilities).as_json[:"data"]
  end
  # has_many :tasks
end