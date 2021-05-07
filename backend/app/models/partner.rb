class Partner < ApplicationRecord
  has_many :responsibilities
  # has_secure_password
  # validates :email, presence: true
  # validates_uniqueness_of :email, :case_sesitive => false
end
