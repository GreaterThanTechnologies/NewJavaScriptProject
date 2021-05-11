class Task < ApplicationRecord
  belongs_to :partner
  validates :todo, presence: true
end
