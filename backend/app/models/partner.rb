class Partner < ApplicationRecord

  # the model here is stating the relationship between the Partner
  # and the tasks. This is stating that the partner has many tasks.
  # also, the dependant: : destroy is setting forth the fact that if
  # a partner is destroyed, the task is also destroyed. 
  has_many :tasks, dependent: :destroy

end
