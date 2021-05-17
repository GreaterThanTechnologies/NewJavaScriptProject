class ApplicationRecord < ActiveRecord::Base

  # this is included when installing rails using the --api tag. from what
  # I read on this, it associates the classes to a db, which is obviously
  # needed when running rails in the backend api for db staorage
  self.abstract_class = true
  
end
