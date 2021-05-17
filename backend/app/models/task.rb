class Task < ApplicationRecord

  # this is setting forth the relationship between the task and the partner.
  # this stating that a task belongs to a partner. The validation is in place
  # trequire that when submitting a new task, that the task itself is
  # actually filled out and not left blank. I was unable to finish error
  # handling for this, and thus returns nothing if a blank task is
  # submitted. However this is not a requirement of the project
  belongs_to :partner
  validates :todo, presence: true
end
