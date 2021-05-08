class ResponsibilitySerializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :partner_id, :task
  # attribute :partners do |list|
  #   PartnerSerializer.new(list.partners).as_json["data"]
  end
  belongs_to :partner
end