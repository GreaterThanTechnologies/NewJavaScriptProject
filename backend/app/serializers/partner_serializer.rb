class PartnerSerializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :fname, :lname, :title, :level
  # attribute :responibilities do |resp|
  #   ResponsibiltySerializer.new(resp.responsibilities).as_json["data"]
  end
  has_many :tasks
end