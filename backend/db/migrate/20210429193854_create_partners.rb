class CreatePartners < ActiveRecord::Migration[6.1]
  def change
    create_table :partners do |t|
      t.string :fname
      t.string :lname
      t.string :title
      t.string :level

      t.timestamps
    end
  end
end
