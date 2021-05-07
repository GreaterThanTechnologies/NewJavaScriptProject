class Responsibility < ApplicationRecord
  belongs_to :partner
  # validates: task, presence: true
end
