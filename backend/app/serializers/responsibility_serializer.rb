class ResponsibilitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id :partner_id, :task
  # belongs_to :partner
end