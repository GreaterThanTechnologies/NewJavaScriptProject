class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :todo
      t.belongs_to :partner, null: false, foreign_key: true

      t.timestamps
    end
  end
end
