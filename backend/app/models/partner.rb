class Partner < ApplicationRecord
  has_many :tasks, dependent: :destroy

end
