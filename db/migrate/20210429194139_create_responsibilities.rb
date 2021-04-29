class CreateResponsibilities < ActiveRecord::Migration[6.1]
  def change
    create_table :responsibilities do |t|
      t.integer :partner_id
      t.string :task

      t.timestamps
    end
  end
end
